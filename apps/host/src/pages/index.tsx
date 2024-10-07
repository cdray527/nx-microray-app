import Head from 'next/head';
import { MainLayout } from '@design-system/components/templates';

export default function Home() {
    return (
        <div>
            <Head>
                <title>NX Microray App</title>
            </Head>
            <MainLayout>
                <div>Hello</div>
            </MainLayout>
        </div>
    );
}
