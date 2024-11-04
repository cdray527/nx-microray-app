import Cookies from 'js-cookie';
import { ICartItem } from '../../types/Cart';

export const addToCart = (item: ICartItem) => {
    // Get existing cart items from cookies
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const existingCart = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')!) : [];

    // Check if the item already exists in the cart
    const itemExists = existingCart.some((cartItem: ICartItem) => cartItem.id === item.id);
    if (!itemExists) {
        existingCart.push(item);
        console.log('Added to cart', item);
    }
    Cookies.set('cart', JSON.stringify(existingCart), { expires: 7 }); // Expires in 7 days
};
