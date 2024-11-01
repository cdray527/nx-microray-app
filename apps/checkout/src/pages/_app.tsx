import { AppProps } from 'next/app';
import { ThemeProvider } from '@utils/provider';
import '@design-system/styles/global.scss';

function CheckoutApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <main className="app">
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>
            </main>
        </>
    );
}

export default CheckoutApp;
