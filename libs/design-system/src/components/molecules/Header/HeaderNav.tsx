import Link from 'next/link';
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
                <Link
                    // href={paths.docs.root}
                    href=""
                    className="transition-colors text-primary hover:text-foreground/80"
                >
                    Docs
                </Link>
                <Link
                    // href={paths.product.root}
                    href=""
                    className="transition-colors text-primary hover:text-foreground/80"
                >
                    Demo
                </Link>
            </nav>
        </div>
    );
}
