import { AppProps } from 'next/app';
import { ThemeProvider } from '@hooks';
import '@design-system/styles/global.scss';

function App({ Component, pageProps }: AppProps) {
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

export default App;
