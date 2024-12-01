import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@utils/provider';
import { MainLayout } from '@design-system/components/templates';
import { RecoilRoot } from 'recoil';

const CartModule = dynamic(() => import('checkout/cart-module'), { ssr: false });

import '@design-system/styles/global.scss';

function HostApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <RecoilRoot>
                <main className="app">
                    <div className="min-h-screen antialiased">
                        <div className="relative flex min-h-screen flex-col">
                            <ThemeProvider>
                                <MainLayout CartModule={CartModule}>
                                    <Component {...pageProps} />
                                </MainLayout>
                            </ThemeProvider>
                        </div>
                    </div>
                </main>
            </RecoilRoot>
        </>
    );
}

export default HostApp;
