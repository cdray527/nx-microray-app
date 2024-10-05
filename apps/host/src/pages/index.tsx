import Head from 'next/head';
import Header from '@design-system/components/organisms/Header';

export default function Home() {
    return (
        <div>
            <Head>
                <title>NX Microray App</title>
            </Head>
            <div>
                <Header />
            </div>
        </div>
    );
}
