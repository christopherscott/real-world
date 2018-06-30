// @flow

import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { hot } from 'react-hot-loader';

import gql from 'graphql-tag';

const httpLink = new HttpLink({
  uri: 'http://localhost:4466',
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token
        ? `Bearer ${token}`
        : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTMwMzg3NjM0LCJleHAiOjE1MzA5OTI0MzR9.b5ZzMxwc9EDxNUQUqFktgvr7vY7FAG98Q_R8Um0-V6U',
    },
  };
});

const errorHandler = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`
            [GraphQL error]:
            Message: ${message},
            Location: ${locations},
            Path: ${path}
          `)
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
};

const client = new ApolloClient({
  link: ApolloLink.from([onError(errorHandler), authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});

const query = gql`
  {
    posts {
      id
      title
      text
    }
  }
`;

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Query query={query}>
        {({ loading, error, data: { posts } }) => (
          <React.Fragment>
            {loading && 'lodaing'}
            {error && 'error'}
            {!loading &&
              !error &&
              posts.map(({ id, title, text }) => (
                <React.Fragment key={id}>
                  <h1>{title}</h1>
                  <p>{text}</p>
                </React.Fragment>
              ))}
          </React.Fragment>
        )}
      </Query>
    </div>
  </ApolloProvider>
);

export default hot(module)(App);
