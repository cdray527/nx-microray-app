import { AppProps } from 'next/app';
import { ThemeProvider } from '@utils/provider';
import '@design-system/styles/global.scss';
import { RecoilRoot } from 'recoil';

function CheckoutApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <RecoilRoot>
                <main className="app">
                    <ThemeProvider>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </main>
            </RecoilRoot>
        </>
    );
}

export default CheckoutApp;
