// @flow

import React from 'react';
import { branch, renderComponent } from 'recompose';

type Props = {
  error: false | string,
};

const withError = branch(
  ({ error }: Props) => Boolean(error),
  renderComponent(({ error }: Props) => <div>{error}</div>)
);

export default withError;
