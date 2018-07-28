// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';
import Zoom from '@material-ui/core/Zoom';
import { API } from '../../config';
import { type Movies_movies as Movie } from '../../generated/types.flow';
import { type ExtractReturn } from '../../types';

type Props = {
  ...$Exact<Movie>,
  classes: {
    [key: $Keys<ExtractReturn<typeof styles>>]: string,
  },
};

const styles = theme => ({
  card: {
    display: 'inline-block',
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
      <Zoom in>
        <div
          className={classes.poster}
          style={{ backgroundImage: `url(${API}/${poster})` }}
        />
      </Zoom>
    </LazyLoad>
    <div className={classes.title}>{title}</div>
  </div>
);

export default withStyles(styles)(MovieCard);
