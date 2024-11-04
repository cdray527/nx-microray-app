'use client';

import React, { useEffect, useState } from 'react';
import { CartItem } from './CartItem';
import cn from 'classnames';
import styles from './Cart.module.scss';

const CartMenu = () => {
    const [cartItems, setCartItems] = useState([]);

    // Function to update the cart items from cookies
    const updateCartItems = async () => {
        const cookie = await window.cookieStore.get('cart'); // Replace with your actual cookie name
        if (!cookie) {
            return []; // Return an empty array if no cart exists
        }

        try {
            const existingCart = JSON.parse(decodeURIComponent(cookie.value));
            setCartItems(existingCart || []);
        } catch (error) {
            console.error('Error parsing cart JSON:', error); // Log the error
            return []; // Return an empty array if JSON is invalid
        }
    };

    useEffect(() => {
        // Initial fetch of cart items
        updateCartItems();

        // Listen for changes to the cookie
        window.cookieStore.onchange = (event: { changed: { name: string }[] }) => {
            if (event.changed.some((cookie: { name: string }) => cookie.name === 'cart')) {
                // console.log('detected updated');
                updateCartItems();
            }
        };

        // Cleanup function to remove the listener on component unmount
        return () => {
            window.cookieStore.onchange = null;
        };
    }, []);

    return (
        <div className={cn(styles['cart-menu-container'], 'z-50  items-center justify-center')}>
            <h2 className="text-lg font-semibold">My Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => {
                        console.log(item);
                        return <CartItem key={item.id} item={item} />;
                    })}
                </ul>
            )}
        </div>
    );
};

export { CartMenu };
