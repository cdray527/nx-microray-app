'use client';

import React from 'react';
import CartItem from './CartItem';
import { ICartItem } from '@utils/types/Cart';
import cn from 'classnames';
import styles from './Cart.module.scss';
import { useCartState } from '@utils/hooks/useCartState';

const CartMenu = () => {
    const { cartItems } = useCartState();

    return (
        <>
            <div className={cn(styles['cart-menu'])}>
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
        </>
    );
};

export default CartMenu;
