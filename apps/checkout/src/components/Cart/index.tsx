'use client';

import React from 'react';
import CartHeader from './CartHeader';
import CartMenu from './CartMenu';
import CartFooter from './CartFooter';
import styles from './Cart.module.scss';
import cn from 'classnames';
import { useCartState } from '@utils/hooks/useCartState';

const Cart = () => {
    const { isCartOpen } = useCartState();

    return (
        <div className={cn(styles['cart-container'], { [styles.open]: isCartOpen })}>
            <CartHeader />
            <CartMenu />
            <CartFooter />
        </div>
    );
};

export default Cart;
