// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nx/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const dotenv = require('dotenv');

if (process.env.NODE_ENVIRONMENT !== 'production') {
    dotenv.config({ path: '../.env' });
}

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
                name: 'checkout',
                filename: 'static/chunks/remoteEntry.js',
                extraOptions: {
                    automaticAsyncBoundary: true
                },
                exposes: {
                    './cart-module': './src/components/Cart/index.tsx'
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
