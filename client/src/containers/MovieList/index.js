// @flow

import * as React from 'react';
import { map, concat, mergeWithKey, compose, objOf } from 'ramda';
import { Query, type QueryRenderProps } from 'react-apollo';
import gql from 'graphql-tag';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from '../../components/InfiniteScroll';
import MovieCard from '../../components/MovieCard';
import { type Movies } from '../../generated/types.flow';
import { type ExtractReturn } from '../../types';

type Props = {
  classes: {
    [key: $Keys<ExtractReturn<typeof styles>>]: string,
  },
};

const MOVIES = gql`
  query Movies($after: String) {
    movies(first: 20, after: $after, orderBy: popularity_DESC) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title
          poster
        }
      }
    }
  }
`;

const styles = theme => ({
  container: {
    padding: `${theme.spacing.unit * 4}px`,
  },
  item: {
    textAlign: 'center',
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-20px',
  },
});

const MovieList = ({ classes }: Props) => (
  <Grid
    container
    className={classes.container}
    spacing={16}
    direction="row"
    justify="center"
    alignItems="center"
  >
    <Query query={MOVIES} variables={{ after: null }}>
      {({
        loading,
        error,
        fetchMore,
        data: { movies },
      }: QueryRenderProps<Movies>) => (
        <React.Fragment>
          {error && <div>{error.message}</div>}
          {loading && (
            <CircularProgress className={classes.progress} size={100} />
          )}
          {movies && (
            <InfiniteScroll
              hasNextPage={movies.pageInfo.hasNextPage}
              fetchMore={() =>
                fetchMore({
                  variables: {
                    after: movies.pageInfo.endCursor,
                  },
                  updateQuery: (prev, { fetchMoreResult: next }) => {
                    if (!next) {
                      return prev;
                    }

                    const concatEdges = (key, left, rigth) =>
                      key === 'edges' ? concat(left, rigth) : rigth;

                    return compose(
                      objOf('movies'),
                      mergeWithKey(concatEdges, prev.movies)
                    )(next.movies);
                  },
                })
              }
              spinner={<CircularProgress size={50} />}
            >
              {map(
                ({ node: { id, title, poster } }) => (
                  <Grid
                    key={id}
                    className={classes.item}
                    item
                    xl={3}
                    lg={3}
                    md={4}
                    sm={6}
                    xs={12}
                  >
                    <MovieCard title={title} poster={poster} />
                  </Grid>
                ),
                movies.edges
              )}
            </InfiniteScroll>
          )}
        </React.Fragment>
      )}
    </Query>
  </Grid>
);

export default withStyles(styles)(MovieList);
