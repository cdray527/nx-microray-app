import { useRef } from 'react';
import { Header, Footer } from '@design-system/components/organisms';
import { useCartState } from '@utils/hooks/useCartState';

type Props = {
    children: React.ReactNode;
    CartModule: React.ComponentType;
};

export function MainLayout({ children, CartModule }: Props) {
    const { isCartOpen, openCart } = useCartState();
    const cartMenuRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen antialiased">
            <div className="relative flex min-h-screen flex-col">
                <Header onClickCartButton={() => openCart()} />
                <div className="flex-1 py-6 px-6">{children}</div>
                <Footer />
            </div>
            {isCartOpen && (
                <div className="absolute top-0 right-0" ref={cartMenuRef}>
                    <CartModule />
                </div>
            )}
        </div>
    );
}
