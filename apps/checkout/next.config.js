// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nx/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

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
    webpack(config) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'checkout',
                filename: 'static/chunks/remoteEntry.js',
                remotes: {},
                extraOptions: {
                    automaticAsyncBoundary: true
                },
                exposes: {
                    './buy-button': './components/buy-button/buy-button.tsx',
                    './useAddToCartHook': './hooks/useAddToCart.ts'
                },
                shared: {}
            })
        );

        return config;
    }
};

module.exports = withNx(nextConfig);
