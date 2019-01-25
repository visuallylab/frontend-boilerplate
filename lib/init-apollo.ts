import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink
} from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

import { typeDefs } from '../schema';
import { defaults, resolvers } from '../resolvers';

import { withClientState } from 'apollo-link-state';

const isBrowser = typeof window !== 'undefined';
let apolloClient: null | ApolloClient<{}> = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  global.fetch = fetch;
}

function create(initialState: any) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient

  const cache = new InMemoryCache().restore(initialState || {});
  const stateLink = withClientState({ resolvers, defaults, cache, typeDefs });
  const httpLink = new HttpLink({
    uri: 'http://localhost:5000', // Server URL (must be absolute)
    credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
  });
  return new ApolloClient({
    connectToDevTools: isBrowser,
    // ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    ssrMode: false, // for debug
    cache,
    link: ApolloLink.from([stateLink, httpLink])
  });
}

export default function initApollo(initialState = {}) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
