import React from 'react'
import {SideNavBar} from '../../components/SideNavBar.jsx'

const AppLayout = (props) =>
  <div id="wrapper">
    <SideNavBar {...props} />
    {props.children}
  </div>

export default AppLayout;