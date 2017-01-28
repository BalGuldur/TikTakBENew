import React from 'react'
import {UserInfo} from '../components/UserInfo.jsx'

const SideNavBar = (props) =>
  <nav className="navbar-default navbar-static-side" role="navigation">
    <div className="sidebar-collapse">
      <ul className="nav metismenu" id="side-menu">
        <li className="nav-header">
          <UserInfo current_user={props.current_user} />
        </li>
      </ul>
    </div>
  </nav>

export {SideNavBar}