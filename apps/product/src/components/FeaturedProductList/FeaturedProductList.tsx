import React, { useEffect, useState } from 'react';
import { ProductCard } from '@design-system/components/molecules';
import { getFeaturedProducts } from '@utils/queries/product/getFeaturedProducts';
import { Product } from '@utils/types/Product';

interface FeaturedProductListProps {
    dataProducts: Product[];
    count: number;
}

const FeaturedProductList: React.FC<FeaturedProductListProps> = ({ dataProducts, count }) => {
    const [products, setProducts] = useState<Product[]>(dataProducts);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setProducts(dataProducts);

        const fetchProducts = async () => {
            try {
                const data = await getFeaturedProducts(count);
                setProducts(data);
            } catch (err) {
                console.log(err);
                setError('Failed to fetch featured products');
            } finally {
                setLoading(false);
            }
        };
        if (dataProducts?.length !== count) {
            fetchProducts();
        }
    }, [dataProducts, count]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!products?.length) {
        return <p>No featured products available.</p>;
    }

    return (
        products && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        description={product.name}
                        thumbnail={product.image.thumbnail}
                        price={product.retailPrice}
                        brand={product.brand}
                        gender={product.gender}
                        // link={product.links.goat}
                        // onClick={() => window.open(product.links.goat, '_blank')}
                    />
                ))}
            </div>
        )
    );
};

export default FeaturedProductList;
