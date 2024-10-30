'use client';

import { ThemeToggler, SearchBar } from '@design-system/components/molecules';
import { Button, Iconify } from '@design-system/components/atoms';

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/70">
            <div className="container flex h-16 items-stretch">
                <div className="m-8 hidden md:flex w-full items-stretch">
                    <nav className="flex flex-1 items-center space-x-6 text-sm font-medium ml-1">
                        <Button variant="default" size="default" asChild>
                            <a href="/">
                                <Iconify icon="mdi:home" className="mr-2" />
                                NX-Microray
                            </a>
                        </Button>
                        <ThemeToggler />
                    </nav>
                    <div className="flex flex-1 items-center md:justify-end">
                        <SearchBar onSearch={(query) => console.log(query)} />
                    </div>
                    <div className="flex flex-1 items-center md:justify-end">Cart</div>
                </div>
            </div>
        </header>
    );
}
