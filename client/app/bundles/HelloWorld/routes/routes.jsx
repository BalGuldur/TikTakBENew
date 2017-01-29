import React from 'react';
import { Route } from 'react-router';

import Main from '../containers/MainContainer.jsx';
import MainLayout from '../components/MainLayout.jsx'
import DashboardPage from '../components/DashboardPage.jsx'

export default (
  <Route>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={DashboardPage} />
    </Route>
  </Route>
);