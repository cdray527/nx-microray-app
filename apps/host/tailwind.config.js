import sharedConfig from '../../libs/design-system/tailwind.config';

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [sharedConfig],
    content: [
        join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
        ...createGlobPatternsForDependencies(__dirname)
    ],
    theme: {
        extend: {}
    },
    plugins: []
};
