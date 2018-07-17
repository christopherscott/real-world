// @flow

import React from 'react';
import { Router as ReachRouter } from '@reach/router';
import IndexPage from '../pages/Index';

const Router = () => (
  <ReachRouter>
    <IndexPage path="/" />
    {/* <IndexPage path="/a" /> */}
  </ReachRouter>
);

export default Router;
