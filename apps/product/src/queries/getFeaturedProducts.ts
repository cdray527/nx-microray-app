// lib/queries/getFeaturedProducts.ts
import { gql } from '@apollo/client';
import createApolloClient from '../utils/apollo';
import { Product } from '@utils/types/Product';

const client = createApolloClient();

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
