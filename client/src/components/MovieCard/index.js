// @flow

import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Styled from '../../utils/Styled';
import { type Films_films as Film } from '../../generated/types.flow';

type Props = {
  ...Film,
};

const styles = {
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
  cover: {
    minWidth: '150px',
    height: '223px',
    backgroundColor: 'black',
  },
};

const MovieCard = ({
  title,
  year,
  runtime,
  plot,
  poster,
  rating,
  votes,
  directors,
}: Props) => (
  <Styled styles={styles}>
    {({ classes }) => (
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="title">{title}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {directors &&
                directors.map(({ id, firstName, lastName }) => (
                  <React.Fragment key={id}>
                    {firstName} {lastName}
                  </React.Fragment>
                ))}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={poster}
          title="Live from space album cover"
        />
      </Card>
    )}
  </Styled>
);

export default MovieCard;
