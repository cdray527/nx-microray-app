export interface Product {
    id: string;
    sku: string;
    brand: string;
    name: string;
    colorway?: string;
    gender?: string;
    category?: string;
    releaseYear?: string;
    releaseDate?: string;
    retailPrice?: number;
    estimatedMarketValue?: number;
    story?: string;
    image?: {
        original?: string;
        small?: string;
        thumbnail?: string;
    };
    links?: any;
}

export interface Sneaker extends Product {
    size: string;
    category: 'sneaker';
}

export interface Shirt extends Product {
    size: string;
    material: string;
    category: 'shirt';
}

export interface Hat extends Product {
    style: string;
    adjustable: boolean;
    category: 'hat';
}

export interface Products {
    products: Product[];
}
