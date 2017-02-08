import React, {Component} from 'react'

class MenuDepartment extends Component {
  constructor(props) {
    super(props)
  }

  // testLog = () => {this.props.actions.testLog)}
  render = () => {
    return <div className="col-md-3">
      <div onClick={this.testLog}>{this.props.title}</div>
    </div>
  }
}

export default MenuDepartment