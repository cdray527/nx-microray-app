export interface ICartItem {
    id: string;
    name: string;
    quantity: number;
    retailPrice: number;
    dateAdded: string;
    image: {
        thumbnail: string;
    };
}

export interface ICartItems {
    items?: ICartItem[];
}
