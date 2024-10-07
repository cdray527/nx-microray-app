'use client';

import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
    return (
        <NextThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </NextThemeProvider>
    );
}

export const useTheme = () => useNextTheme();
