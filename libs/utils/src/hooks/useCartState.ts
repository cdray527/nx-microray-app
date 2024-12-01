import { useRecoilState } from 'recoil';
import { cartIsOpenedState } from '../recoil/cartState';

export const useCartState = () => {
    const [isCartOpen, setCartOpen] = useRecoilState(cartIsOpenedState);

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    return { isCartOpen, openCart, closeCart };
};
