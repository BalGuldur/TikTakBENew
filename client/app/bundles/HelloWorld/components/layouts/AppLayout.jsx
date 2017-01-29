import React from 'react'
import { SideNavBar } from '../../components/SideNavBar'

const AppLayout = (props) =>
  <div id="wrapper">
    <SideNavBar {...props} />
    <div id="page-wrapper" className="gray-bg dashboard-1">
      {props.children}
    </div>
  </div>

export default AppLayout