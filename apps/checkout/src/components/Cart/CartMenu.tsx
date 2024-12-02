'use client';

import React from 'react';
import { CartItem } from './CartItem';
import { ICartItem } from '@utils/types/Cart';
import cn from 'classnames';
import { Button, Iconify } from '@design-system/components/atoms';
import styles from './Cart.module.scss';
import { useCartState } from '@utils/hooks/useCartState';

const CartMenu = () => {
    const { cartItems, closeCart } = useCartState();

    return (
        <>
            <div className={cn(styles['cart-menu-header'], 'flex justify-between items-center')}>
                <span>My Cart</span>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => closeCart()}
                    aria-label="Close Cart"
                >
                    <Iconify icon="mdi:close" className="text-xl" />
                </Button>
            </div>
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
        </>
    );
};

export { CartMenu };
