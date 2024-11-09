import Cookies from 'js-cookie';
import { ICartItem } from '../../types/Cart';

export const getCartItems = (): ICartItem[] => {
    const cart = Cookies.get('cart');
    return cart ? JSON.parse(cart) : []; // Return an empty array if no cart exists
};
