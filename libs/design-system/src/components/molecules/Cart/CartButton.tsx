'use client';

import * as React from 'react';
import { Iconify } from '@design-system/components/atoms';
import { CartMenu } from './CartMenu';

interface CartButtonProps {
    icon?: string;
    itemCount?: number;
    items: string[];
}

const CartButton: React.FC<CartButtonProps> = ({ icon = 'mdi:cart', itemCount = 0, items }) => {
    const [isMenuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="relative flex items-center p-2 rounded-md border border-gray-300 hover:bg-gray-100"
            >
                <Iconify icon={icon} width={24} height={24} />
                {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-500 rounded-full">
                        {itemCount}
                    </span>
                )}
            </button>
            {isMenuOpen && <CartMenu items={items} onClose={toggleMenu} />}
        </div>
    );
};

export { CartButton };
