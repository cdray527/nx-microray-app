'use client';

import { useState } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
// utils
import cn from 'classnames';
// components
import { Icon } from '@iconify/react';
import { Button } from '@design-system/components/atoms';
import { SidebarMenu } from '@design-system/components/molecules'; // Only import SidebarMenu
// import { ScrollArea } from '@repo/ui/components/scroll-area';
// import { Logo } from '@repo/ui/components/logo';
// routes
// import { paths } from '@repo/utils/routes/paths';

// ----------------------------------------------------------------------

export function HeaderNavMenu() {
    const [open, setOpen] = useState(false);

    return (
        <SidebarMenu isOpen={open} side="left" onClose={() => setOpen(false)}>
            {/* <Button
                variant="ghost"
                className="mr-4 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                onClick={() => setOpen(!open)}
            >
                <Icon icon="solar:hamburger-menu-linear" className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
            </Button> */}

            <div className="pr-0">
                {' '}
                {/* Replaced SidebarMenuContent with a div */}
                {/* <MobileLink href="/" className="flex items-center" onClick={() => setOpen(false)}>
                    <Logo className="mr-2" disabledLink={true} />
                </MobileLink>
                <ScrollArea className="my-6 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3">
                        <MobileLink href={paths.docs.root} onClick={() => setOpen(false)}>
                            Docs
                        </MobileLink>
                        <MobileLink href={paths.product.root} onClick={() => setOpen(false)}>
                            Demo
                        </MobileLink>
                    </div>
                </ScrollArea> */}
            </div>
        </SidebarMenu>
    );
}

// MobileLink component to handle navigation
interface MobileLinkProps extends LinkProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

function MobileLink({ href, onClick, className, children, ...props }: MobileLinkProps) {
    const router = useRouter();

    return (
        <Link
            href={href}
            onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                router.push(href.toString()); // Use Next.js router to navigate
                onClick?.(); // Trigger onClick for closing menu
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    );
}
