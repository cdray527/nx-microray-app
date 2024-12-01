// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nx/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const dotenv = require('dotenv');

if (process.env.NODE_ENVIRONMENT !== 'production') {
    dotenv.config({ path: '../.env' });
}

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
    const location = isServer ? 'ssr' : 'chunks';

    return {
        store: `store@${process.env.NEXT_PUBLIC_STORE_URL}/_next/static/${location}/remoteEntry.js`,
        checkout: `checkout@${process.env.NEXT_PUBLIC_CHECKOUT_URL}/_next/static/${location}/remoteEntry.js`
    };
};

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
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
                name: 'product',
                filename: 'static/chunks/remoteEntry.js',
                // remotes: remotes(isServer),
                extraOptions: {
                    automaticAsyncBoundary: true
                },
                exposes: {
                    './featured-product-list':
                        './src/components/FeaturedProductList/FeaturedProductList.tsx'
                },
                shared: {
                    recoil: { singleton: true, requiredVersion: false }
                }
            })
        );

        return config;
    }
};

module.exports = withNx(nextConfig);
