// @flow

import React from 'react';
import { compose, map, prop, join, defaultTo } from 'ramda';
import { withStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Zoom from '@material-ui/core/Zoom';
import { type Films_films as Film } from '../../generated/types.flow';
import { type ExtractReturn } from '../../types';

type Props = {
  ...$Exact<Film>,
  classes: {
    [key: $Keys<ExtractReturn<typeof styles>>]: string,
  },
};

const styles = theme => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  actions: {
    display: 'flex',
    padding: theme.spacing.unit * 2,
  },
  avatar: {
    fontSize: '0.5em',
    width: '30px',
    height: '30px',
  },
  badge: {
    margin: theme.spacing.unit * 2,
    background: theme.palette.grey[50],
    color: theme.palette.grey[900],
    borderColor: theme.palette.grey[900],
    borderWidth: '1px',
    borderStyle: 'dashed',
  },
  cover: {
    minWidth: '150px',
    height: '223px',
    backgroundColor: theme.palette.primary.dark,
  },
});

const MovieCard = ({
  classes,
  id,
  title,
  poster,
  rating,
  votes,
  genres,
}: Props) => (
  <Card className={classes.card}>
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography variant="title">{title}</Typography>
        <Typography variant="subheading" color="textSecondary">
          {compose(
            join(', '),
            map(prop('genre')),
            defaultTo([])
          )(genres)}
        </Typography>
      </CardContent>
    </div>
    <LazyLoad height={223}>
      <Zoom in>
        <Badge
          classes={{
            badge: classes.badge,
          }}
          badgeContent={rating.toFixed(1)}
        >
          <CardMedia
            className={classes.cover}
            image={poster}
            title="Live from space album cover"
          />
        </Badge>
      </Zoom>
    </LazyLoad>
  </Card>
);

export default withStyles(styles)(MovieCard);
