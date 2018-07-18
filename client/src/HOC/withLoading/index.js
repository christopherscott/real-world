// @flow

import React from 'react';
import { branch, renderComponent } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

type Props = {
  loading: boolean,
};

const styles = {
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-20px',
  },
};

const withLoading = (size: number = 100) =>
  branch(
    ({ loading }: Props) => loading,
    renderComponent(
      withStyles(styles)(
        ({ classes }: { classes: { [key: $Keys<typeof styles>]: string } }) => (
          <CircularProgress className={classes.progress} size={size} />
        )
      )
    )
  );

export default withLoading;
