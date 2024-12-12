// lib/queries/getFeaturedProducts.ts
import { gql } from '@apollo/client';
import createApolloClient from '../../tools/apollo';
import { Product } from '../../types/Product';

const client = createApolloClient('product');

export const getFeaturedProducts = async (count: number): Promise<Product[]> => {
    let result = [];
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

    try {
        const response = await client.query({
            query,
            variables: { count }
        });
        result = response.data.featuredProducts;
    } catch (error) {
        console.log(error);
    }

    return result;
};
