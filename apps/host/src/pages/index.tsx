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
            <section className="flex flex-col border-b">
                <h2 className="px-4 py-8  md:py-12">Static Content from Store App</h2>
            </section>
            <section className="flex flex-col">
                {/* <div className="container flex flex-col items-center text-center gap-4"> */}
                <h2 className="px-4 py-4">Dynamic Content from Product App </h2>
                <div className="flex flex-col max-w-fit">
                    <FeaturedProductList dataProducts={products} count={5} />
                </div>
            </section>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const products = await getFeaturedProducts(10);
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
