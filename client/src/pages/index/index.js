// @flow

import React from 'react';
import { Query, type QueryRenderProps } from 'react-apollo';
import gql from 'graphql-tag';
import MovieList from '../../components/MovieList';
import { type Films } from '../../generated/types.flow';

const FILMS = gql`
  query Films {
    films {
      id
      title
      year
      runtime
      plot
      poster
      rating
      votes
      directors {
        id
        firstName
        lastName
      }
    }
  }
`;

const IndexPage = () => (
  <Query query={FILMS}>
    {({ loading, error, data: { films } }: QueryRenderProps<Films>) => (
      <MovieList loading={loading} error={error} films={films} />
    )}
  </Query>
);

export default IndexPage;
