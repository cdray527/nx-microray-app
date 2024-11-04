'use client';

import React from 'react';
import { CartMenu } from './CartMenu';
import styles from './Cart.module.scss';
import cn from 'classnames';

const Cart = () => {
    return (
        <div className={cn(styles['cart-main-container'])}>
            <CartMenu />
        </div>
    );
};

export default Cart;
