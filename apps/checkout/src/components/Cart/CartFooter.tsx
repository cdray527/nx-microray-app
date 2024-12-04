'use client';

import React from 'react';
import { useCartState } from '@utils/hooks/useCartState';
import styles from './Cart.module.scss';

const CartFooter = () => {
    const { totalPrice } = useCartState();

    return (
        <div className={styles['cart-footer']}>
            <div className="flex justify-between items-center">
                <span className="font-bold">Total:</span>
                <span className="text-xl">${totalPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default CartFooter;
