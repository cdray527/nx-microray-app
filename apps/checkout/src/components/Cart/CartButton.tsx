'use client';

import * as React from 'react';
import { Iconify } from '@design-system/components/atoms';
import { Button } from '@design-system/components/atoms';

interface CartButtonProps {
    onClick: () => void; // Parent-controlled event handler to manage menu state
    itemCount?: number; // Optional item count to display in a badge
}

const CartButton: React.FC<CartButtonProps> = ({ onClick, itemCount = 0 }) => {
    return (
        <div className="relative">
            <Button
                variant="outline"
                size="icon"
                onClick={onClick}
                aria-label="Toggle cart menu"
                className="relative flex items-center p-2"
            >
                <Iconify icon="mdi:cart" width={24} height={24} />
                {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-500 rounded-full">
                        {itemCount}
                    </span>
                )}
            </Button>
        </div>
    );
};

export { CartButton };
