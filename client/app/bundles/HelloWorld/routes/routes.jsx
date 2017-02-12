import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppLayout from '../containers/AppLayoutContainer'
import Test from '../containers/TestContainer'
import Main from '../containers/MainContainer'
import Locations from '../containers/LocationsContainer'
import Employees from '../containers/EmployeesContainer'
import PageLayout from '../components/layouts/ContentLayout'
import Halls from '../components/new_halls/HallsContainer'
// import MenuControl from '../containers/MenuControlContainer'
import Menu from '../containers/MenuContainer'
import WorkWindow from '../containers/WorkWindow'

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Main}/>
    <Route path="work_window" component={PageLayout}>
      <IndexRoute component={WorkWindow}/>
    </Route>
    <Route path="test" component={Test}/>
    <Route path="locations" component={Locations}/>
    <Route path="employees" component={Employees}/>
    <Route path="halls_control" component={PageLayout}>
      <IndexRoute component={Halls} config_mode="true"/>
    </Route>
    <Route path="menu_control" component={Menu} config_mode="true"/>
  </Route>
);