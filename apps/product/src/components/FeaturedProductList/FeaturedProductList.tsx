import React, { useEffect, useState } from 'react';
import { ProductCard, Carousel } from '@design-system/components/molecules';
import { getFeaturedProducts } from '@utils/queries/product/getFeaturedProducts';
import { Product } from '@utils/types/Product';
import { ICartItem } from '@utils/types/Cart';
import { useCartState } from '@utils/hooks/useCartState';

interface FeaturedProductListProps {
    dataProducts: Product[];
    count: number;
}

const FeaturedProductList: React.FC<FeaturedProductListProps> = ({ dataProducts, count }) => {
    const [products, setProducts] = useState<Product[]>(dataProducts);
    const { addToCart, openCart } = useCartState();

    // Fetch products if necessary
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getFeaturedProducts(count);
                setProducts(data);
            } catch (err) {
                console.error('Error fetching featured products:', err);
            }
        };

        if (dataProducts?.length !== count) {
            fetchProducts();
        } else {
            setProducts(dataProducts);
        }
    }, [dataProducts, count]);

    // Handle adding product to cart
    const handleAddToCart = (product: Product) => {
        const cartItem: ICartItem = {
            id: product.id,
            name: product.name,
            retailPrice: product.retailPrice || 0,
            dateAdded: new Date().toISOString(),
            image: {
                thumbnail: product.image?.thumbnail || ''
            }
        };

        addToCart(cartItem);
        openCart();
    };

    if (!products?.length) {
        return <p>No featured products available.</p>;
    }

    return (
        <div className="flex">
            <Carousel
                items={products}
                renderItem={(product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        description={product.name}
                        thumbnail={product.image?.thumbnail || ''}
                        price={product.retailPrice || 0}
                        brand={product.brand}
                        gender={product.gender || ''}
                        sku={product.sku || ''}
                        category={product.category || ''}
                        onClickAddToCartButton={() => handleAddToCart(product)}
                    />
                )}
            />
        </div>
    );
};

export default FeaturedProductList;
