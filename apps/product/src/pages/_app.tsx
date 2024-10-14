import { AppProps } from 'next/app';
import { ThemeProvider } from '@utils/provider';
import '@design-system/styles/global.scss';

function ProductApp({ Component, pageProps }: AppProps) {
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

export default ProductApp;
