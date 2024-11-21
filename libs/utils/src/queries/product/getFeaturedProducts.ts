// lib/queries/getFeaturedProducts.ts
import { gql } from '@apollo/client';
import createApolloClient from '../../tools/apollo';
import { Product } from '../../types/Product';

const url = `${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/query`;
const client = createApolloClient(url);

export const getFeaturedProducts = async (count: number): Promise<Product[]> => {
    const query = gql`
        query FeaturedProducts($count: Int!) {
            featuredProducts(count: $count) {
                id
                sku
                brand
                name
                colorway
                gender
                silhouette
                releaseYear
                releaseDate
                retailPrice
                estimatedMarketValue
                story
                image {
                    original
                    small
                    thumbnail
                }
            }
        }
    `;

    const response = await client.query({
        query,
        variables: { count }
    });

    return response.data.featuredProducts;
};
