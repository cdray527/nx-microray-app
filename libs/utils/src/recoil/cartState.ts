import { atom } from 'recoil';
import { ICartItem } from '../types/Cart';

export const cartIsOpenedState = atom<boolean>({
    key: 'cartIsOpenedState',
    default: false
});

export const cartItemsState = atom<ICartItem[]>({
    key: 'cartItemsState',
    default: []
});
