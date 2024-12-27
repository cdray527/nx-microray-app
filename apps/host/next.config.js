// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nx/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const dotenv = require('dotenv');

if (process.env.NODE_ENVIRONMENT !== 'production') {
    dotenv.config({ path: '../.env' });
}

const remotes = (isServer) => {
    let objRemotes;

    if (isServer) {
        objRemotes = {
            store: `store@${process.env.NEXT_PRIVATE_STORE_URL}/_next/static/ssr/remoteEntry.js`,
            checkout: `checkout@${process.env.NEXT_PRIVATE_CHECKOUT_URL}/_next/static/ssr/remoteEntry.js`,
            product: `product@${process.env.NEXT_PRIVATE_PRODUCT_URL}/_next/static/ssr/remoteEntry.js`
        };
    } else {
        objRemotes = {
            store: `store@${process.env.NEXT_PUBLIC_STORE_URL}/_next/static/chunks/remoteEntry.js`,
            checkout: `checkout@${process.env.NEXT_PUBLIC_CHECKOUT_URL}/_next/static/chunks/remoteEntry.js`,
            product: `product@${process.env.NEXT_PUBLIC_PRODUCT_URL}/_next/static/chunks/remoteEntry.js`
        };
    }
    console.log(objRemotes);
    return objRemotes;
};

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
        NEXT_PUBLIC_STORE_URL: process.env.NEXT_PUBLIC_STORE_URL,
        NEXT_PUBLIC_CHECKOUT_URL: process.env.NEXT_PUBLIC_CHECKOUT_URL,
        NEXT_PUBLIC_PRODUCT_URL: process.env.NEXT_PUBLIC_PRODUCT_URL,
        NEXT_PUBLIC_PRODUCT_API_URL: process.env.NEXT_PUBLIC_PRODUCT_API_URL
    },
    nx: {
        // Set this to true if you would like to to use SVGR
        // See: https://github.com/gregberge/svgr
        svgr: false
    },
    /**
     *
     * @param {import('webpack').Configuration} config
     * @returns {import('webpack').Configuration}
     */
    webpack(config, { isServer }) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'host',
                filename: 'static/chunks/remoteEntry.js',
                remotes: remotes(isServer),
                extraOptions: {
                    automaticAsyncBoundary: true
                },
                exposes: {},
                shared: {
                    // to ensure the host will share the same instance of cart provider with the imported federated components
                    recoil: { singleton: true, requiredVersion: false }
                },
                initOptions: {
                    shareStrategy: 'lazy'
                }
            })
        );

        return config;
    }
};

module.exports = withNx(nextConfig);
