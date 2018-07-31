// @flow

import * as React from 'react';
import { compose, join, map } from 'ramda';
import { Query, type QueryRenderProps } from 'react-apollo';
import gql from 'graphql-tag';
import { withStyles } from '@material-ui/core/styles';
import format from 'date-fns/fp/format';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';
import { API } from '../../config';
import { getUTCDate } from '../../utils';
import { type ExtractReturn } from '../../types';

type Props = {
  classes: {
    [key: $Keys<ExtractReturn<typeof styles>>]: string,
  },
};

const MOVIE = gql`
  query Movie($id: ID) {
    movie(where: { id: $id }) {
      title
      overview
      popularity
      releaseDate
      poster
      runtime
      director
      actors
      genres {
        id
        name
      }
      ratings {
        source
        value
      }
    }
  }
`;

const styles = theme => ({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    background: theme.palette.grey[50],
    display: 'grid',
    gridTemplateRows: '0.7fr 1fr',
    gridTemplateColumns: '2fr 1fr',
  },
  close: {
    margin: theme.spacing.unit,
    position: 'fixed',
    right: 0,
  },
  poster: {
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    width: '400px',
    height: '600px',
    gridArea: '1 / 2 / 3 / 3',
    alignSelf: 'center',
    zIndex: 2,
    boxShadow: theme.shadows[10],
  },
  header: {
    gridArea: '1 / 1 / 1 / 1',
    fontFamily: 'Anton, sans-serif',
    textTransform: 'uppercase',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 8}px`,
  },
  title: {
    fontSize: '3rem',
  },
  releaseDate: {
    fontSize: '2rem',
  },
  genres: {
    display: 'grid',
    width: '100%',
    gridAutoFlow: 'column',
    gridAutoColumns: 'fit-content(100%)',
    gridColumnGap: `${theme.spacing.unit}px`,
  },
  content: {
    gridArea: '2 / 1 / 2 / 2',
    color: theme.palette.grey[50],
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 8}px`,
    zIndex: 2,
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
  },
  left: {
    fontFamily: 'Anton, sans-serif',
    fontSize: '1.5rem',
    display: 'grid',
    gridAutoRows: 'fit-content(100%)',
    gridRowGap: `${theme.spacing.unit}px`,
    textTransform: 'uppercase',
  },
  leftItemValue: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: `${theme.spacing.unit}px`,
  },
  devider: {
    backgroundColor: theme.palette.grey[800],
    marginRight: '30%',
  },
  bottom: {
    background: theme.palette.grey[900],
    gridArea: '2 / 1 / 3 / 3',
  },
});

const Movie = ({ id, on, toggle, classes, ...props }: Props) => (
  <div className={classes.container} {...props}>
    <IconButton className={classes.close} onClick={toggle}>
      <CloseIcon />
    </IconButton>

    <Query query={MOVIE} variables={{ id }} fetchPolicy="cache-first">
      {({
        loading,
        error,
        fetchMore,
        data: { movie },
      }: QueryRenderProps<Movie>) => (
        <React.Fragment>
          {movie && (
            <React.Fragment>
              <div
                className={classes.poster}
                style={{ backgroundImage: `url(${API}/${movie.poster})` }}
              />
              <Slide direction="down" in style={{ transitionDelay: 400 }}>
                <div className={classes.header}>
                  <div className={classes.title}>{movie.title}</div>
                  <div className={classes.releaseDate}>
                    {format('MMMM dd YYYY')(movie.releaseDate)}
                  </div>
                  <div className={classes.genres}>
                    {map(
                      ({ id, name }) => <Chip key={id} label={name} />,
                      movie.genres
                    )}
                  </div>
                </div>
              </Slide>

              <Slide direction="up" in style={{ transitionDelay: 250 }}>
                <div className={classes.bottom} />
              </Slide>

              <div className={classes.content}>
                <Slide direction="up" in style={{ transitionDelay: 500 }}>
                  <div className={classes.left}>
                    <div>Popularity</div>
                    <div className={classes.leftItemValue}>
                      <TrendingUpIcon className={classes.icon} />
                      {movie.popularity}
                    </div>
                    <Divider className={classes.devider} />
                    <div>Runtime</div>
                    <div className={classes.leftItemValue}>
                      <AccessTimeIcon className={classes.icon} />
                      {compose(
                        format("hh'h' mm'm'"),
                        getUTCDate
                      )(movie.runtime)}
                    </div>
                  </div>
                </Slide>
                <Slide direction="up" in style={{ transitionDelay: 600 }}>
                  <div>{movie.overview}</div>
                </Slide>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </Query>
  </div>
);

export default withStyles(styles)(Movie);
