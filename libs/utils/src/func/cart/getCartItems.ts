import Cookies from 'js-cookie';
import { CartItem } from '../../types/Cart';

export const getCartItems = (): CartItem[] => {
    const cart = Cookies.get('cart');
    return cart ? JSON.parse(cart) : []; // Return an empty array if no cart exists
};
