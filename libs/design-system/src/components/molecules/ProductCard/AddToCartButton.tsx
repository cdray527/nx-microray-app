import React from 'react';
import { addToCart } from '@utils/func/cart/addToCart';
import { Product } from '@utils/types/Product';
import { ICartItem } from '@utils/types/Cart';
import { Button, Iconify } from '@design-system/components/atoms';

interface AddToCartButtonProps {
    product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
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
    };

    return (
        <Button className="mt-4" variant="default" onClick={() => handleAddToCart(product)}>
            <Iconify icon="mdi:cart-plus" className="w-5 h-5" />
        </Button>
    );
};

export default AddToCartButton;
