import React, { Component } from 'react'

class AddLocationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
    }
  }

  handleChangeTitle = (event) => {
    this.setState({title: event.target.value})
  }

  submitForm = () => {
    this.props.closeForm()
    console.log('create location')
    this.props.createLocation(this.state.title)
  }

  render = () =>
    <div>
      <div className="form">
        <div className="form-group">
          <label className="col-sm-2 control-label">Название</label>
          <input
            type="text"
            className="form-control"
            value={this.state.title}
            onChange={this.handleChangeTitle}
          >
          </input>
        </div>
        <div className="form-group">
          <button className="btn btn-default" onClick={this.submitForm}>
            <i className="fa fa-check"></i>
          </button>
        </div>
      </div>
    </div>
}

export default AddLocationForm
