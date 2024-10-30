import Link from 'next/link';
import { ThemeToggler } from '@design-system/components/molecules';
import { Button, Iconify } from '@design-system/components/atoms';

// routes
// import { paths } from "@repo/utils/routes/paths";
// components
// import { Logo } from "@repo/ui/components/logo";

// ----------------------------------------------------------------------

export function HeaderNav() {
    return (
        <div className="mr-16 hidden md:flex">
            <div className="mr-12">{/* <Logo /> */}</div>
            <nav className="flex items-center space-x-6 text-sm font-medium ml-1">
                <Button variant="default" size="default" asChild>
                    <a href="/">
                        <Iconify icon="mdi:home" className="mr-2" />
                        NX-Microray
                    </a>
                </Button>
                <ThemeToggler />
            </nav>
        </div>
    );
}
