import Head from 'next/head';
import { MainLayout } from '@design-system/components/templates';

export default function Home() {
    return (
        <div>
            <Head>
                <title>HOST APP</title>
            </Head>
            <MainLayout>
                <div>HOST APP</div>
            </MainLayout>
        </div>
    );
}
