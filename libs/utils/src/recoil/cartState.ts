import { atom } from 'recoil';
import { ICartItem } from '../types/Cart';

// Manage cart open state
export const cartIsOpenedState = atom({
    key: 'cartIsOpenedState',
    default: false
});

// Manage cart items state
export const cartItemsState = atom<ICartItem[]>({
    key: 'cartItemsState',
    default: []
});
