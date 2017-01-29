import React, {Component} from 'react'
import {UserInfo} from '../components/UserInfo.jsx'
import {MenuItem} from '../components/base_elements/MenuItem.jsx'

class SideNavBar extends Component {
  constructor(props) {
    super(props)
  }

  renderMenuItem = (menuItem) =>
    <MenuItem key={menuItem.id} {...menuItem} />

  render = () =>
    <nav className="navbar-default navbar-static-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav metismenu" id="side-menu">
          <li className="nav-header">
            <UserInfo current_user={this.props.current_user}/>
          </li>
          {this.props.menu_items.map(this.renderMenuItem)}
        </ul>
      </div>
    </nav>
}

export {SideNavBar}