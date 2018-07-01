// @flow

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { hot } from 'react-hot-loader';
import IndexPage from '../pages/index';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorHandler = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.error(`
            [GraphQL error]:
            Message: ${message},
            Location: ${locations},
            Path: ${path}
          `)
    );
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
};

const client = new ApolloClient({
  link: ApolloLink.from([onError(errorHandler), authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <IndexPage />
  </ApolloProvider>
);

export default hot(module)(App);
