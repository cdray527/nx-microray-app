'use client';

import React from 'react';
import { ICartItem } from '@utils/types/Cart';
import { Button, Iconify } from '@design-system/components/atoms';
import { useCartState } from '@utils/hooks/useCartState';

interface CartItemProps {
    item: ICartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { updateItemQuantity, removeItem } = useCartState();

    return (
        <li className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
                <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                />
                <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p>${item.retailPrice.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <button
                    className="px-2 py-1 border rounded"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                    -
                </button>
                <span>{item.quantity}</span>
                <button
                    className="px-2 py-1 border rounded"
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                    +
                </button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                >
                    <Iconify icon="mdi:trash-can" className="text-xl" />
                </Button>
            </div>
        </li>
    );
};

export default CartItem;
