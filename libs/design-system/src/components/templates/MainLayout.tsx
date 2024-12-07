import { useRef } from 'react';
import { Header, Footer } from '@design-system/components/organisms';
// import { useCartState } from '@utils/hooks/useCartState';
// import useOutsideClick from '@utils/hooks/useOutsideClick';

type Props = {
    children: React.ReactNode;
    CartModule?: React.ComponentType;
};

export function MainLayout({ children, CartModule }: Props) {
    // const { closeCart } = useCartState();
    const cartMenuRef = useRef<HTMLDivElement>(null);

    // useOutsideClick(cartMenuRef, () => closeCart());

    return (
        <div className="min-h-screen antialiased">
            <div className="relative flex min-h-screen flex-col">
                <Header />
                <div className="flex-1 py-6">{children}</div>
                <Footer />
            </div>
            {CartModule && <CartModule />}
        </div>
    );
}
