import React from 'react';
import { Route } from 'react-router';

import Main from '../containers/MainContainer';
import Test from '../containers/TestContainer'

export default (
  <Route path="/" component={Main}>
    <Route path="/test" component={Test}/>
  </Route>
);