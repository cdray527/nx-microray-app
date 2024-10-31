import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { CartItem } from './CartItem'; // Ensure this points to your CartItem component file

const CartMenu = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Read cart items from cookies
        const existingCart = Cookies.get('cartItems');
        if (existingCart) {
            setItems(JSON.parse(existingCart));
        }
    }, []);

    return (
        <div className="cart-menu">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export { CartMenu };
