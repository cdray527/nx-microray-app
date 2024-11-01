// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nx/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
    const location = isServer ? 'ssr' : 'chunks';

    return {};
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
                name: 'checkout',
                filename: 'static/chunks/remoteEntry.js',
                // remotes: remotes(isServer),
                extraOptions: {
                    automaticAsyncBoundary: true
                },
                exposes: {},
                shared: {}
            })
        );

        return config;
    }
};

module.exports = withNx(nextConfig);
