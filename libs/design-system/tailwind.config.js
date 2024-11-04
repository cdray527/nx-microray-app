const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['selector', '[data-theme="dark"]'],
    content: [
        // join(__dirname, '{src,pages,components,app}/**/*!(*.spec).{ts,tsx,html}'),
        join(__dirname, '../../apps/**/*.{ts,tsx,html}'),
        join(__dirname, '../../libs/**/*.{ts,tsx,html}'),
        ...createGlobPatternsForDependencies(__dirname)
    ],
    theme: {
        extend: {
            colors: {
                'bordercolor-default': 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
                background: {
                    DEFAULT: 'var(--background)'
                },
                foreground: {
                    DEFAULT: 'var(--foreground)'
                },
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)'
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)'
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)'
                },
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)'
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)'
                },
                popover: {
                    foreground: 'var(--popover-foreground)',
                    background: 'var(--popover-background)'
                },
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)'
                }
            },
            screens: {
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1400px'
            },
            boxShadow: {
                hovered: '0px 0px 4px 1px'
            }
        }
    },
    safelist: ['bg-background'],
    plugins: []
};
