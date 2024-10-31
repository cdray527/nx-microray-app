import Cookies from 'js-cookie';
import { CartItem } from '../../types/Cart';

export const removeFromCart = (itemId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const existingCart = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')!) : [];
    const updatedCart = existingCart.filter((item: CartItem) => item.id !== itemId);

    Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7 });
};
