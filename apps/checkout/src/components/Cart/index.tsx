'use client';

import React, { useEffect } from 'react';
import { CartMenu } from './CartMenu';
import styles from './Cart.module.scss';
import cn from 'classnames';
import { useCartState } from '@utils/hooks/useCartState';

const Cart = () => {
    const { isCartOpen } = useCartState();

    useEffect(() => {
        console.log(isCartOpen);
    }, [isCartOpen]);

    return (
        <div className={cn(styles['cart-menu-container'], { [styles.open]: isCartOpen })}>
            <CartMenu />
        </div>
    );
};

export default Cart;
