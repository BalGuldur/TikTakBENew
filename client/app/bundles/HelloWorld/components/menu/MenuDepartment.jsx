import React, {Component} from 'react'

class MenuDepartment extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    <div>{this.props.menu_department.title}</div>
  }
}

export default MenuDepartment