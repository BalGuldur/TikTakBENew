import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../containers/MainContainer';
import Test from '../containers/TestContainer'
import AppLayout from '../containers/AppLayoutContainer'

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Main}/>
    <Route path="test" component={Test}/>
  </Route>
);