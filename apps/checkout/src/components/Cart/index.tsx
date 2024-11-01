'use client';

import * as React from 'react';
import { CartMenu } from './CartMenu';
import { CartButton } from './CartButton';

const Cart = () => {
    const [isMenuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            <CartButton onClick={toggleMenu} />
            {isMenuOpen && <CartMenu />}
        </div>
    );
};

export { Cart };
