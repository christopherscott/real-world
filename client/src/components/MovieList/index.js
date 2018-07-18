// @flow

import React from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withError from '../../HOC/withError';
import withLoading from '../../HOC/withLoading';
import MovieCard from '../MovieCard';
import { type Films } from '../../generated/types.flow';
import { type ExtractReturn } from '../../types';

type Props = {
  ...Films,
  classes: {
    [key: $Keys<ExtractReturn<typeof styles>>]: string,
  },
};

const styles = theme => ({
  container: {
    padding: `${theme.spacing.unit * 4}px`,
  },
});

const MovieList = ({ classes, films }: Props) => (
  <Grid
    container
    className={classes.container}
    spacing={16}
    direction="row"
    justify="center"
    alignItems="center"
  >
    {films &&
      films.map(({ id, ...data }) => (
        <Grid key={id} item xl={3} lg={3} md={4} sm={6} xs={12}>
          <MovieCard id={id} {...data} />
        </Grid>
      ))}
  </Grid>
);

export default compose(
  withLoading(100),
  withError,
  withStyles(styles)
)(MovieList);
