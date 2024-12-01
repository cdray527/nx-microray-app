import { AppProps } from 'next/app';
import { ThemeProvider } from '@utils/provider';
import '@design-system/styles/global.scss';
import { RecoilEnv, RecoilRoot } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function ProductApp({ Component, pageProps }: AppProps) {
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

export default ProductApp;
