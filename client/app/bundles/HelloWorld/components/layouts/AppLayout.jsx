import React from 'react'
import { SideNavBar } from '../../components/SideNavBar'
import TestButton from '../base_elements/TestButton'

const AppLayout = (props) =>
  <div id="wrapper">
    <SideNavBar {...props} />
    <div id="page-wrapper" className="gray-bg dashboard-1">
      <TestButton {...props}>Test Button</TestButton>
      {props.children}
    </div>
  </div>

export default AppLayout