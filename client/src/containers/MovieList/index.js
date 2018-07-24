// @flow

import React from 'react';
import { Query, type QueryRenderProps } from 'react-apollo';
import gql from 'graphql-tag';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import MovieCard from '../../components/MovieCard';
import { type Movies } from '../../generated/types.flow';
import { type ExtractReturn } from '../../types';

type Props = {
  classes: {
    [key: $Keys<ExtractReturn<typeof styles>>]: string,
  },
};

const MOVIES = gql`
  query Movies {
    movies {
      id
      title
      overview
      popularity
      releaseDate
      poster
      runtime
      director
      actors
      ratings {
        source
        value
      }
      genres {
        name
      }
    }
  }
`;

const styles = theme => ({
  container: {
    padding: `${theme.spacing.unit * 4}px`,
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
    <Query query={MOVIES}>
      {({ loading, error, data: { movies } }: QueryRenderProps<Movies>) => (
        <React.Fragment>
          {error && <div>{error.message}</div>}
          {loading && (
            <CircularProgress className={classes.progress} size={100} />
          )}
          {movies &&
            movies.map(movie => (
              <Grid key={movie.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
                <MovieCard {...movie} />
              </Grid>
            ))}
        </React.Fragment>
      )}
    </Query>
  </Grid>
);

export default withStyles(styles)(MovieList);
