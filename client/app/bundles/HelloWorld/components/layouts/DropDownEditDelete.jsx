import React, { Component } from 'react'
import {DropDown} from '../base_elements/DropDown'

class DropDownEditDelete extends Component {
  constructor(props) {
    super(props)
  }

  renderButton = () =>
    <div>
      <li>
        <button
          className="btn btn-default"
          onClick={this.props.handleClick.bind(this, 'edit')}
        ><i className="fa fa-pencil">Редактировать</i>
        </button>
      </li>
      <li>
        <button
          className="btn btn-warning"
          onClick={this.props.handleClick.bind(this, 'delete')}
        ><i className="fa fa-trash">Удалить</i>
        </button>
      </li>
    </div>
  render = () =>
    <DropDown>
      <button className="btn-white">
        <i className="fa fa-angle-down"></i>
      </button>
      <ul className="dropdown-menu animated fadeInRight m-t-xs">
        {this.renderButton()}
      </ul>
      {this.props.children}
    </DropDown>
}

export default DropDownEditDelete