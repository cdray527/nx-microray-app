'use client';

import React, { useEffect, useState } from 'react';
import { CartItem } from './CartItem';
import { getCartItems } from '@utils/func/cart';

const CartMenu = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const existingCart = getCartItems();
        if (existingCart) {
            setItems(existingCart);
        }
    }, []);

    // useEffect(() => {
    //     console.log('Current Cart Items', items);
    // }, [items]);

    return (
        <div className="cart-menu">
            <h2 className="text-lg font-semibold">My Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export { CartMenu };
