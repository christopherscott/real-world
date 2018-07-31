// @flow

import * as React from 'react';
import { map, concat, mergeDeepWithKey, cond, equals, T } from 'ramda';
import { Query, type QueryRenderProps } from 'react-apollo';
import gql from 'graphql-tag';
import { withStyles } from '@material-ui/core/styles';
import { Toggle } from 'react-powerplug';
import { Flipper, Flipped } from 'react-flip-toolkit';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from '../../components/InfiniteScroll';
import MovieCard from '../../components/MovieCard';
import Movie from '../Movie';
import { type Movies } from '../../generated';
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
    display: 'grid',
    gridGap: `${theme.spacing.unit * 2}px`,
    justifyItems: 'center',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px`,
    [theme.breakpoints.up('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-20px',
  },
});

const MovieList = ({ classes }: Props) => (
  <div className={classes.container}>
    <Query query={MOVIES} variables={{ after: null }} fetchPolicy="cache-first">
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
                      cond([
                        [equals('edges'), () => concat(left, rigth)],
                        [T, () => rigth],
                      ])(key);

                    return mergeDeepWithKey(concatEdges, prev, next);
                  },
                })
              }
              spinner={<CircularProgress size={50} />}
            >
              {map(
                ({ node: { id, title, poster } }) => (
                  <Toggle key={id} initial={false}>
                    {({ on, toggle }) => (
                      <Flipper flipKey={on}>
                        {on ? (
                          <Flipped flipId={id}>
                            <Movie id={id} on={on} toggle={toggle} />
                          </Flipped>
                        ) : (
                          <Flipped flipId={id}>
                            <div role="presentation" onClick={toggle}>
                              <MovieCard title={title} poster={poster} />
                            </div>
                          </Flipped>
                        )}
                      </Flipper>
                    )}
                  </Toggle>
                ),
                movies.edges
              )}
            </InfiniteScroll>
          )}
        </React.Fragment>
      )}
    </Query>
  </div>
);

export default withStyles(styles)(MovieList);
