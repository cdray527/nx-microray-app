'use client';

import React from 'react';
import cn from 'classnames';
import { Button, Iconify } from '@design-system/components/atoms';
import { useCartState } from '@utils/hooks/useCartState';
import styles from './Cart.module.scss';

const CartHeader = () => {
    const { closeCart, totalItems } = useCartState();
    return (
        <div className={cn(styles['cart-header'], 'flex justify-between items-center')}>
            <h3>My Cart </h3>
            <span>{totalItems > 0 ? `${totalItems} item(s)` : ''}</span>
            <Button variant="ghost" size="icon" onClick={() => closeCart()} aria-label="Close Cart">
                <Iconify icon="mdi:close" className="text-xl" />
            </Button>
        </div>
    );
};

export default CartHeader;
