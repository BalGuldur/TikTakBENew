import React, { Component } from 'react'

class AddButtonWithForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openAddForm: false,
    }
  }

  displayForm = () => {
    if(this.state.openAddingForm) {
      return {}
    } else {
      return {display: "none"}
    }
  }

  changeStateFrom = () => {
    this.setState({openAddingForm: !this.state.openAddingForm})
  }

  render = () =>
    <div className="ibox-content">
      <div className="row">
        <button className="btn btn-default" onClick={this.changeStateFrom}>
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