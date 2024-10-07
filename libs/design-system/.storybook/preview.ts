import { Preview } from '@storybook/react';
import { withThemeByDataAttribute, withThemeByClassName } from '@storybook/addon-themes';
import '../src/styles/global.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        backgrounds: { disable: true }
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
    decorators: [
        withThemeByDataAttribute({
            themes: {
                light: 'light',
                dark: 'dark'
            },
            defaultTheme: 'light',
            attributeName: 'data-theme'
        }),
        withThemeByClassName({
            themes: {
                light: 'light bg-background',
                dark: 'dark bg-background'
            },
            defaultTheme: 'light'
        })
    ]
};

export default preview;
