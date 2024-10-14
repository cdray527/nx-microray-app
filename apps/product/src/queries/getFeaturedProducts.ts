// lib/getFeaturedProducts.ts

const fetchGraphQL = async (query: string, variables: any = {}) => {
    const response = await fetch('http://localhost:8080/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const json = await response.json();
    if (json.errors) {
        throw new Error('GraphQL error: ' + JSON.stringify(json.errors));
    }

    return json.data;
};

export const getFeaturedProducts = async (count: number) => {
    const query = `
      query GetFeaturedProducts($count: Int!) {
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
          links
        }
      }
    `;

    return fetchGraphQL(query, { count });
};
