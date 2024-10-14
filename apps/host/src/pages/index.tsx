import Head from 'next/head';
import dynamic from 'next/dynamic';
import { MainLayout } from '@design-system/components/templates';

// const StoreList = lazy(() => import('store/store-list'));
// const FeaturedProductList = lazy(() => import('product/featured-product-list'));
const FeaturedProductList = dynamic(() => import('product/featured-product-list'));

export default function Home() {
    return (
        <div>
            <Head>
                <title>HOST APP</title>
            </Head>
            <MainLayout>
                <div className="flex justify-center flex-col mx-auto max-w-fit">
                    <FeaturedProductList count={5} />
                </div>
            </MainLayout>
        </div>
    );
}
