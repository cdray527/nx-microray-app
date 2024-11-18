import Cookies from 'js-cookie';
import { ICartItem } from '../../types/Cart';
import { CART_KEY, CART_ID_COOKIE } from '../../constants/cart';

export const addToCart = (item: ICartItem) => {
    const cartId = Cookies.get(CART_ID_COOKIE);
    if (!cartId) {
        const uniqueCartId = crypto.randomUUID();
        Cookies.set(CART_ID_COOKIE, uniqueCartId, { expires: 7, path: '/' }); // 7 days
    }

    const existingCart = JSON.parse(localStorage.getItem(CART_KEY) || '[]') as ICartItem[];

    const itemExists = existingCart.some((cartItem: ICartItem) => cartItem.id === item.id);

    if (!itemExists) {
        existingCart.push(item);
        console.log('Added to cart:', item);

        localStorage.setItem(CART_KEY, JSON.stringify(existingCart));
    }
};
