import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
    const httpLink = new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL}/query` // Update with your GraphQL server URI
    });

    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache() // Cache implementation
    });
};

export default createApolloClient;
