import React from 'react';
import { IndexRoute, Route } from 'react-router';

import MainContainer from '../containers/MainContainer.jsx';
import AppLayoutContainer from '../containers/AppLayoutContainer.jsx';
// import DashboardPage from '../components/DashboardPage.jsx'

export default (
  <Route>
    <Route path="/" component={AppLayoutContainer}>
      <IndexRoute component={MainContainer} />
    </Route>
  </Route>
);