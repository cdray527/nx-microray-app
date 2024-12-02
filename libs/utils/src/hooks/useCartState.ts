import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cartIsOpenedState, cartItemsState } from '../recoil/cartState';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import { ICartItem } from '../types/Cart';
import { CART_KEY, CART_ID_COOKIE } from '../constants/cart';

export const useCartState = () => {
    const [cartItems, setCartItems] = useRecoilState(cartItemsState);
    const [isCartOpen, setCartOpen] = useRecoilState(cartIsOpenedState);

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);
    const toggleCart = () => setCartOpen((prev) => !prev);

    const addToCart = (item: ICartItem) => {
        const cartId = Cookies.get(CART_ID_COOKIE);
        if (!cartId) {
            const uniqueCartId = uuidv4();
            Cookies.set(CART_ID_COOKIE, uniqueCartId, { expires: 7, path: '/' });
        }

        const updatedCartItems = [...cartItems];
        const itemExists = updatedCartItems.some((cartItem) => cartItem.id === item.id);
        if (!itemExists) {
            updatedCartItems.push(item);
            setCartItems(updatedCartItems);
            localStorage.setItem(CART_KEY, JSON.stringify(updatedCartItems));
            console.log('Added to cart:', item);
        } else {
            console.log('Item already inside the cart');
        }
    };

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem(CART_KEY) || '[]') as ICartItem[];
        setCartItems(savedCartItems);
    }, [setCartItems]);

    return { cartItems, isCartOpen, openCart, closeCart, addToCart, toggleCart };
};
