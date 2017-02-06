import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppLayout from '../containers/AppLayoutContainer'
import Test from '../containers/TestContainer'
import Main from '../containers/MainContainer'
import Locations from '../containers/LocationsContainer'
import Employees from '../containers/EmployeesContainer'


export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Main}/>
    <Route path="test" component={Test}/>
    <Route path="locations" component={Locations}/>
    <Route path="employees" component={Employees}/>
  </Route>
);