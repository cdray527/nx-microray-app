import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../src/stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
        '@storybook/addon-docs',
        '@nx/react/plugins/storybook'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    docs: {
        autodocs: true
    }
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
