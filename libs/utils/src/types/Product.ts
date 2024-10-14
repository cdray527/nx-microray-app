export interface Product {
    id: string;
    sku: string;
    brand: string;
    name: string;
    colorway: string;
    gender: string;
    silhouette: string;
    releaseYear: string;
    releaseDate: string;
    retailPrice: number;
    estimatedMarketValue: number;
    story?: string;
    image: Image;
    links?: any;
}

export interface Image {
    original: string;
    small: string;
    thumbnail: string;
}
