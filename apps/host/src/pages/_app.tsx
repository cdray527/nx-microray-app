import { AppProps } from 'next/app';
import '@design-system/styles/global.scss';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <main className="app">
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default App;
