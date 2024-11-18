import { CART_KEY } from '../../constants/cart';

export const getCartItems = () => {
    const items = localStorage.getItem(CART_KEY);
    return items ? JSON.parse(items) : [];
};
