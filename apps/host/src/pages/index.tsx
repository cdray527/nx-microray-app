import Head from 'next/head';
import { MainLayout } from '@design-system/components/templates';

import { lazy, Suspense } from 'react';
const StoreList = lazy(() => import('store/store-list'));

export default function Home() {
    return (
        <div>
            <Head>
                <title>HOST APP</title>
            </Head>
            <MainLayout>
                <div>HOST APP</div>
                <Suspense fallback={<div>Loading...</div>}>
                    <StoreList />
                </Suspense>
            </MainLayout>
        </div>
    );
}
