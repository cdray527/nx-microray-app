// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = (url: string) => {
    const httpLink = new HttpLink({ uri: url });

    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    });
};

export default createApolloClient;
