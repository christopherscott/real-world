// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

type StyledRender<T> = ({ classes: { [key: $Keys<T>]: string } }) => React.Node;

type Props<T> = {
  styles: T,
  children: StyledRender<T>,
};

const Styled = <T: Object>({ styles, children, ...props }: Props<T>) => {
  const Render = withStyles(styles)(({ children: c, ...p }) => c(p));

  return <Render>{({ classes }) => children({ classes, ...props })}</Render>;
};

export default Styled;
