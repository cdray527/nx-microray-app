import Head from 'next/head';
import dynamic from 'next/dynamic';
import { MainLayout } from '@design-system/components/templates';
import { GetServerSideProps } from 'next';
import { getFeaturedProducts } from '@utils/queries/getFeaturedProducts'; // Adjust the path as needed
import { Product } from '@utils/types';

const FeaturedProductList = dynamic(() => import('product/featured-product-list'));

interface HomeProps {
    featuredProducts: Product[];
}

export default function Home({ featuredProducts }: HomeProps) {
    return (
        <div>
            <Head>
                <title>HOST APP</title>
            </Head>
            <MainLayout>
                <div className="flex justify-center flex-col mx-auto max-w-fit">
                    <FeaturedProductList products={featuredProducts} count={5} />
                </div>
            </MainLayout>
        </div>
    );
}

// Server-side fetching for the featured products
export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const featuredProducts = await getFeaturedProducts(5); // Fetch top 5 featured products
        return {
            props: {
                featuredProducts // Pass data to the page as props
            }
        };
    } catch (error) {
        console.error('Error fetching featured products:', error);
        return {
            props: {
                featuredProducts: [] // Provide empty array in case of error
            }
        };
    }
};
