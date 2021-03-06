// @flow

import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { compose } from 'recompose';
import { hot } from 'react-hot-loader';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { API } from '../config';
import Router from '../router';

const httpLink = new HttpLink({
  uri: API,
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

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: grey,
  },
});

const styles = {
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Roboto, sans-serif',
    },
  },
};

const App = () => (
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <Router />
    </MuiThemeProvider>
  </ApolloProvider>
);

export default compose(
  hot(module),
  withStyles(styles)
)(App);
