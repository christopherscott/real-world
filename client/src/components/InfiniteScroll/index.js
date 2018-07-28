// @flow

import * as React from 'react';
import Observer from 'react-intersection-observer';
import { withStyles } from '@material-ui/core/styles';

type Props = {
  classes: {
    [key: $Keys<typeof styles>]: string,
  },
  children: React.Node,
  spinner: React.Node,
  hasNextPage: boolean,
  fetchMore: () => void,
};

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
};

const InfiniteScroll = ({
  classes,
  children,
  spinner,
  hasNextPage,
  fetchMore,
}: Props) => (
  <Observer>
    {({ inView, ref }) => {
      if (hasNextPage && inView) {
        fetchMore();
      }

      return (
        <React.Fragment>
          {children}
          <div ref={ref} className={classes.root}>
            {hasNextPage && spinner}
          </div>
        </React.Fragment>
      );
    }}
  </Observer>
);

export default withStyles(styles)(InfiniteScroll);
