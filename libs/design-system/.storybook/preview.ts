import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        // options: {
        //     assetPrefix: '/storybook',
        // },
        // nextjs: {
        //     // 👇 Override the default navigation properties
        //     navigation: {
        //       pathname: '/app/',
        //     },
        // },
    },
};

export default preview;
