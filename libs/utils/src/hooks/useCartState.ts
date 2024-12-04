import { useEffect, useMemo } from 'react';
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

    const totalPrice = useMemo(
        () => cartItems.reduce((total, item) => total + item.retailPrice * item.quantity, 0),
        [cartItems]
    );

    const updateItemQuantity = (itemId: string, newQuantity: number) => {
        if (newQuantity < 1) return;

        const updatedCartItems = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
        localStorage.setItem(CART_KEY, JSON.stringify(updatedCartItems));
    };

    const addToCart = (item: ICartItem) => {
        const cartId = Cookies.get(CART_ID_COOKIE);
        if (!cartId) {
            const uniqueCartId = uuidv4();
            Cookies.set(CART_ID_COOKIE, uniqueCartId, { expires: 7, path: '/' });
        }

        setCartItems((prevCartItems) => {
            const updatedCartItems = [...prevCartItems];
            const itemIndex = updatedCartItems.findIndex((cartItem) => cartItem.id === item.id);

            if (itemIndex === -1) {
                updatedCartItems.push(item);
            } else {
                updatedCartItems[itemIndex] = {
                    ...updatedCartItems[itemIndex],
                    quantity: updatedCartItems[itemIndex].quantity + 1
                };
            }
            localStorage.setItem(CART_KEY, JSON.stringify(updatedCartItems));

            return updatedCartItems;
        });
    };
    const removeItem = (itemId: string) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
        localStorage.setItem(CART_KEY, JSON.stringify(updatedCartItems));
    };

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem(CART_KEY) || '[]') as ICartItem[];
        setCartItems(savedCartItems);
    }, [setCartItems]);

    return {
        cartItems,
        totalPrice,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        updateItemQuantity,
        removeItem
    };
};
