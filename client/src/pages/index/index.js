// @flow

import React from 'react';
import { Query, type QueryRenderProps } from 'react-apollo';
import gql from 'graphql-tag';
import { withStyles } from '@material-ui/core/styles';
import { type Films } from '../../generated/types.flow';
import MovieCard from '../../components/MovieCard';

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
        firstName
        lastName
      }
    }
  }
`;

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    margin: '50px',
    gridGap: '20px',
  },
};

const IndexPage = ({ classes }) => (
  <Query query={FILMS}>
    {({ loading, error, data: { films } }: QueryRenderProps<Films>) => (
      <React.Fragment>
        {loading && 'lodaing'}
        {error && 'error'}
        {!loading &&
          !error && (
            <div className={classes.grid}>
              {films.map(({ id, ...data }) => <MovieCard key={id} {...data} />)}
            </div>
          )}
      </React.Fragment>
    )}
  </Query>
);

export default withStyles(styles)(IndexPage);
