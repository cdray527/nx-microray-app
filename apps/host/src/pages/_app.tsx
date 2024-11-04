import { useState } from 'react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@utils/provider';
import { Header, Footer } from '@design-system/components/organisms';

const Cart = dynamic(() => import('checkout/cart-module'));

import '@design-system/styles/global.scss';

function HostApp({ Component, pageProps }: AppProps) {
    // State to control the visibility of the Cart component
    const [isCartVisible, setIsCartVisible] = useState(false);

    // Toggle cart visibility
    const handleCartButtonClick = () => {
        setIsCartVisible((prev) => !prev);
    };

    return (
        <>
            <main className="app">
                <ThemeProvider>
                    {/* Pass the cart toggle handler to the Header */}
                    <div className="min-h-screen antialiased">
                        <div className="relative flex min-h-screen flex-col">
                            <Header onClickCartButton={handleCartButtonClick} />

                            {/* Conditionally render the Cart component based on isCartVisible */}
                            {isCartVisible && (
                                // <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                                <Cart />
                                // </div>
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
