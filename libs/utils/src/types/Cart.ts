export interface CartItem {
    id: string;
    name: string;
    retailPrice: number;
    dateAdded: string;
    image: {
        thumbnail: string;
    };
}

export interface Cart {
    cart?: CartItem[];
}
