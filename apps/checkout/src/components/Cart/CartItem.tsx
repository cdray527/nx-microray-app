'use client';

import React from 'react';
import { CartItem as CartItemProps } from '@utils/types/Cart';

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    return (
        <li className="flex items-center space-x-4">
            <img src={item.image.thumbnail} alt={item.name} className="w-16 h-16 rounded" />
            <div>
                <h3 className="font-medium">{item.name}</h3>
                <p>${item.retailPrice.toFixed(2)}</p>
                <p className="text-sm text-gray-500">
                    Added on: {new Date(item.dateAdded).toLocaleDateString()}
                </p>
            </div>
        </li>
    );
};

export { CartItem };
