import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getFeaturedProducts } from '@utils/queries/product/getFeaturedProducts';
import { Products } from '@utils/types/Product';

// SSR
import FeaturedProductList from 'product/featured-product-list';

export default function Home({ products }: Products) {
    return (
        <>
            <Head>
                <title>HOST APP</title>
            </Head>
            <div className="flex-1 py-6 px-6">
                <div className="flex justify-center flex-col mx-auto max-w-fit">
                    <FeaturedProductList dataProducts={products} count={5} />
                </div>
            </div>
        </>
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
