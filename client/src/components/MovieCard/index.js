// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';
import Grow from '@material-ui/core/Grow';
import { API } from '../../config';
import { type Movies_movies_edges_node as Movie } from '../../generated';
import { type ExtractReturn } from '../../types';

type Props = {
  ...Movie,
  classes: {
    [key: $Keys<ExtractReturn<typeof styles>>]: string,
  },
};

const styles = theme => ({
  card: {
    display: 'inline-block',
    cursor: 'pointer',
  },
  poster: {
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    width: '300px',
    height: '450px',
    boxShadow: theme.shadows[10],
  },
  title: {
    width: '300px',
    fontFamily: 'Anton, sans-serif',
    fontSize: '1rem',
    textTransform: 'uppercase',
    textAlign: 'left',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  },
});

const MovieCard = ({ classes, title, poster }: Props) => (
  <div className={classes.card}>
    <LazyLoad height={223}>
      <Grow in>
        <div
          className={classes.poster}
          style={{ backgroundImage: `url(${API}/${poster})` }}
        />
      </Grow>
    </LazyLoad>
    <div className={classes.title}>{title}</div>
  </div>
);

export default withStyles(styles)(MovieCard);
