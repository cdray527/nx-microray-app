import { useState, useRef } from 'react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@utils/provider';
import { Header, Footer } from '@design-system/components/organisms';
import useOutsideClick from '@utils/hooks/useOutsideClick';

const Cart = dynamic(() => import('checkout/cart-module'));

import '@design-system/styles/global.scss';

function HostApp({ Component, pageProps }: AppProps) {
    // State to control the visibility of the Cart component
    const [isCartVisible, setIsCartVisible] = useState(false);

    // Toggle cart visibility
    const handleCartToggler = (isOpen?: boolean | null) => {
        setIsCartVisible((prev) => (isOpen ? isOpen : !prev));
    };

    const cartMenuRef = useRef<HTMLDivElement>(null);
    useOutsideClick(cartMenuRef, () => handleCartToggler(false));

    return (
        <>
            <main className="app">
                <ThemeProvider>
                    {/* Pass the cart toggle handler to the Header */}
                    <div className="min-h-screen antialiased">
                        <div className="relative flex min-h-screen flex-col">
                            <Header cartToggler={handleCartToggler} />

                            {/* Conditionally render the Cart component based on isCartVisible */}
                            {isCartVisible && (
                                <div ref={cartMenuRef}>
                                    <Cart />
                                </div>
                            )}

                            <Component {...pageProps} />
                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </main>
        </>
    );
}

export default HostApp;
