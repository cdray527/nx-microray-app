'use client';

import { ThemeToggler, SearchBar } from '@design-system/components/molecules';
import { Button, Iconify } from '@design-system/components/atoms';

interface HeaderProps {
    onClickCartButton?: () => void;
}

export function Header({ onClickCartButton }: HeaderProps) {
    const handleOnClickCartButton = () => {
        if (typeof onClickCartButton === 'function') {
            onClickCartButton();
        }
    };

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/70">
            <div className="container flex h-16 items-stretch">
                <div className="m-8 flex w-full items-stretch">
                    <nav className="flex flex-1 items-center space-x-6 text-sm font-medium ml-1">
                        <Button variant="default" size="default" asChild>
                            <a href="/">
                                <Iconify icon="mdi:home" className="mr-2" />
                                NX-Microray
                            </a>
                        </Button>
                        <ThemeToggler />
                    </nav>
                    <div className="hidden md:flex flex-1 items-center md:justify-end">
                        <SearchBar onSearch={(query) => console.log(query)} />
                    </div>
                    <div className="hidden md:flex flex-1 items-center md:justify-end">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleOnClickCartButton()}
                            aria-label="Toggle cart menu"
                            className="relative flex items-center p-2"
                        >
                            <Iconify icon="mdi:cart" width={24} height={24} />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
