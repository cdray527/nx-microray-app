'use client';

import React, { useEffect, useState } from 'react';
import { CartItem } from './CartItem';
import { v4 as uuidv4 } from 'uuid';
import { ICartItem } from '@utils/types/Cart';
import { getCartItems } from '@utils/func/cart';
import { CART_KEY, CART_ID_COOKIE } from '@utils/constants/cart';
import cn from 'classnames';
import styles from './Cart.module.scss';

// Generate New Cart Id cookies if not exists, else reuse existing cart id
const checkCartId = async () => {
    const cartCookie = await window.cookieStore.get(CART_ID_COOKIE);
    if (!cartCookie) {
        const uniqueCartId = uuidv4();
        document.cookie = `${CART_ID_COOKIE}=${uniqueCartId}; path=/; secure; samesite=strict`;
        return uniqueCartId;
    }
    return cartCookie.value;
};

const CartMenu = () => {
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);

    // Listen for localStorage changes
    useEffect(() => {
        const onCartStorageUpdate = () => {
            setCartItems(getCartItems());
        };

        // Initial fetch of cart items
        setCartItems(getCartItems());

        // Ensure cart ID exists
        checkCartId();

        // // Listen for `storage` events (cross-tab updates)
        window.addEventListener('storage', (event) => {
            if (event.key === CART_KEY) {
                onCartStorageUpdate();
            }
        });

        // Cleanup listeners
        return () => {
            window.removeEventListener('storage', onCartStorageUpdate);
        };
    }, []);

    return (
        <div className={cn(styles['cart-menu-container'], 'z-50 items-center justify-center')}>
            <div className={cn(styles['cart-menu-header'])}>My Cart</div>
            <div className={cn(styles['cart-menu-body'])}>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item: ICartItem) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export { CartMenu };
