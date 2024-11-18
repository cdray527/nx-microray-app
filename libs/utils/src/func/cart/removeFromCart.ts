import { ICartItem } from '../../types/Cart';
import { CART_KEY } from '../../constants/cart';

export const removeFromCart = (itemId: string) => {
    const existingCart = JSON.parse(localStorage.getItem(CART_KEY) || '[]') as ICartItem[];

    const updatedCart = existingCart.filter((item: ICartItem) => item.id !== itemId);

    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
};
