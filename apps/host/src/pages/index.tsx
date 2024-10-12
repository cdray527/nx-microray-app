import Head from 'next/head';
import dynamic from 'next/dynamic';
import { MainLayout } from '@design-system/components/templates';

import { lazy, Suspense } from 'react';

// const StoreList = lazy(() => import('store/store-list'));
// const FeaturedProductList = lazy(() => import('product/featured-product-list'));
const FeaturedProductList = dynamic(() => import('product/featured-product-list'), { ssr: false });

export default function Home() {
    return (
        <div>
            <Head>
                <title>HOST APP</title>
            </Head>
            <MainLayout>
                <div>HOST APP</div>
                <div className="flex justify-center flex-col mx-auto max-w-fit">
                    <Suspense fallback={<div>Loading...</div>}>
                        <FeaturedProductList />
                    </Suspense>
                </div>
            </MainLayout>
        </div>
    );
}
