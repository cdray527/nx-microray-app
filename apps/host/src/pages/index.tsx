import Head from 'next/head';
import { MainLayout } from '@design-system/components/templates';

import { lazy, Suspense } from 'react';
const BuyButton = lazy(() => import('checkout/buy-button'));
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
                    <BuyButton />
                    <StoreList />
                </Suspense>
            </MainLayout>
        </div>
    );
}
