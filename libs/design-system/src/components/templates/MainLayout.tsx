import { Header, Footer } from '@design-system/components/organisms';

type Props = {
    children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-background font-sans antialiased">
            <div className="relative flex min-h-screen flex-col">
                <Header />
                <div className="flex-1 py-6 px-6">{children}</div>
                <Footer />
            </div>
        </div>
    );
}
