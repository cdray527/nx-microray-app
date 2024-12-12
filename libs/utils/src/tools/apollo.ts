import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Define the allowed services
type ApiServiceName = 'product';

const apiServiceUrlMapper: Record<ApiServiceName, { SSR: string; CSR: string }> = {
    product: {
        SSR: `${process.env.NEXT_PRIVATE_PRODUCT_API_URL}/query`,
        CSR: `${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/query`
    }
};

const createApolloClient = (serviceName: ApiServiceName) => {
    const isSSR = typeof window === 'undefined';
    const uri = isSSR ? apiServiceUrlMapper[serviceName].SSR : apiServiceUrlMapper[serviceName].CSR;

    const httpLink = new HttpLink({ uri });
    return new ApolloClient({
        ssrMode: isSSR,
        link: httpLink,
        cache: new InMemoryCache()
    });
};

export default createApolloClient;
