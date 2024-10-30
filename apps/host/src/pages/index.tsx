import Head from 'next/head';
import dynamic from 'next/dynamic';
import { MainLayout } from '@design-system/components/templates';
import { GetServerSideProps } from 'next';
import { getFeaturedProducts } from '@utils/queries/product/getFeaturedProducts';
import { Products } from '@utils/types/Product';

const FeaturedProductList = dynamic(() => import('product/featured-product-list'));

export default function Home({ products }: Products) {
    return (
        <div>
            <Head>
                <title>HOST APP</title>
            </Head>
            <MainLayout>
                <div className="flex justify-center flex-col mx-auto max-w-fit">
                    <FeaturedProductList dataProducts={products} count={5} />
                </div>
            </MainLayout>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const products = await getFeaturedProducts(5);
        return {
            props: {
                products
            }
        };
    } catch (error) {
        console.error('Error fetching featured products:', error);
        return {
            props: {
                products: []
            }
        };
    }
};
