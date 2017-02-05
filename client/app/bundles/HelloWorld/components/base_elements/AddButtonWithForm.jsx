import React, { Component } from 'react'

class AddButtonWithForm extends Component {
  constructor(props) {
    super(props)
  }

  displayForm = () => {
    if(this.props.open) {
      return {}
    } else {
      return {display: "none"}
    }
  }

  render = () =>
    <div className="ibox-content">
      <div className="row">
        <button className="btn btn-default" onClick={this.props.changeOpen}>
          <i className="fa fa-plus">Добавить заведение</i>
        </button>
      </div>
      <div className="row">
        <div style={this.displayForm()}>
          {this.props.children}
        </div>
      </div>
    </div>
}

export default AddButtonWithForm