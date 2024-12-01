import React from 'react';
import { Product } from '@utils/types/Product';
import { Button, Iconify } from '@design-system/components/atoms';

interface AddToCartButtonProps {
    onClickAddToCartButton: () => void;
    product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClickAddToCartButton, product }) => {
    const handleAddToCart = (product: Product) => {
        onClickAddToCartButton();
    };

    return (
        <Button className="mt-4" variant="default" onClick={() => handleAddToCart(product)}>
            <Iconify icon="mdi:cart-plus" className="w-5 h-5" />
        </Button>
    );
};

export default AddToCartButton;
