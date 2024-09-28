const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: [
        join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
        ...createGlobPatternsForDependencies(__dirname)
    ],
    theme: {
        extend: {
            colors: {
                // Light Theme (default)
                border: '#E2E8F0', // Light gray border
                input: '#F7FAFC', // Light input background
                ring: '#3182CE', // Light blue ring (focus outline)
                background: '#FFFFFF', // White background
                foreground: '#2D3748', // Darker gray for text
                primary: {
                    DEFAULT: '#2B6CB0', // Light blue primary color
                    foreground: '#FFFFFF' // White text on primary
                },
                secondary: {
                    DEFAULT: '#6c757d',
                    foreground: '#FFFFFF' // White text on secondary
                },
                destructive: {
                    DEFAULT: '#E53E3E', // Light red destructive color
                    foreground: '#FFFFFF' // White text for destructive actions
                },
                muted: {
                    DEFAULT: '#CBD5E0', // Muted gray color
                    foreground: '#2D3748' // Darker gray for readability
                },
                accent: {
                    DEFAULT: '#38B2AC', // Light teal accent color
                    foreground: '#FFFFFF' // White text on accent
                },
                popover: {
                    DEFAULT: '#F7FAFC', // Light background for popovers
                    foreground: '#2D3748' // Darker gray text for popovers
                },
                card: {
                    DEFAULT: '#FFFFFF', // White card background
                    foreground: '#2D3748' // Darker gray text for cards
                },

                // Dark Theme (using a selector for dark mode)
                dark: {
                    border: '#4A5568', // Darker gray border
                    input: '#2D3748', // Dark input background
                    ring: '#63B3ED', // Lighter blue ring (focus outline)
                    background: '#1A202C', // Dark background
                    foreground: '#E2E8F0', // Lighter gray for text
                    primary: {
                        DEFAULT: '#4299E1', // Dark blue primary color
                        foreground: '#1A202C' // Darker foreground for primary elements
                    },
                    secondary: {
                        DEFAULT: '#D53F8C', // Dark pink secondary color
                        foreground: '#1A202C' // Darker foreground for secondary elements
                    },
                    destructive: {
                        DEFAULT: '#F56565', // Dark red destructive color
                        foreground: '#1A202C' // Darker foreground for destructive elements
                    },
                    muted: {
                        DEFAULT: '#4A5568', // Muted dark gray
                        foreground: '#E2E8F0' // Lighter gray for readability
                    },
                    accent: {
                        DEFAULT: '#4FD1C5', // Dark teal accent color
                        foreground: '#1A202C' // Darker foreground on accents
                    },
                    popover: {
                        DEFAULT: '#2D3748', // Dark popover background
                        foreground: '#E2E8F0' // Lighter gray text for popovers
                    },
                    card: {
                        DEFAULT: '#2D3748', // Dark card background
                        foreground: '#E2E8F0' // Lighter gray text for cards
                    }
                }
            },
            screens: {
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1400px'
            }
        }
    },
    plugins: []
};
