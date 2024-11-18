'use client';
import * as Toggle from '@radix-ui/react-toggle';
import { Button, Iconify } from '@design-system/components/atoms';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggler() {
    const { theme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = theme;
        setIsDarkMode(currentTheme === 'dark');
    }, [theme]);

    return (
        <Button variant="outline" size="default" asChild>
            <Toggle.Root
                pressed={isDarkMode}
                onPressedChange={() => setTheme(isDarkMode ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="border border-color flex size-[35px] items-center justify-center rounded"
            >
                {isDarkMode ? (
                    <Iconify
                        icon="solar:moon-stars-linear"
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:rotate-0 dark:scale-100"
                    />
                ) : (
                    <Iconify
                        icon="solar:sun-2-linear"
                        className="absolute h-[1.2rem] w-[1.2rem]rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                )}
            </Toggle.Root>
        </Button>
    );
}
