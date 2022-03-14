import { useMemo } from 'react';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import merge from 'deepmerge';
import { equal as isEqual } from '@wry/equality';
import possibleTypes from './possibleTypes.json';

let apolloClient;
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

export function createApolloClient() {
  const isBrowser = typeof window !== 'undefined';

  const httpLink = new HttpLink({
    uri: (isBrowser ? process.env.hosts.fe : process.env.hosts.be) + '/graphql',
    credentials: 'same-origin',
    fetch,
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    const token = process.env.NEXT_PUBLIC_GQL_SERVER_TOKEN;

    const context = operation.getContext()

    if(context.headers){
      context.headers.Authorization = `Bearer ${token}`;
    } else {
      context.headers = {
        Authorization: `Bearer ${token}`
      }
    }

    operation.setContext(context);

    return forward(operation);
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authMiddleware.concat(httpLink),
    connectToDevTools: true,
    cache: new InMemoryCache({ possibleTypes }),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
