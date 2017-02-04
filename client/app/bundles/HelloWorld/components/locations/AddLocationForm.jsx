import React, { Component } from 'react'
import * as actions from '../../actions/MainActionCreators'

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

  render = () =>
    <div className="ibox float-e-margins">
      <div className="ibox-content">
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
          <button className="btn btn-default" onClick={this.props.createLocation.bind(this, this.state.title)}>
            <i className="fa fa-check"></i>
          </button>
        </div>
      </div>
    </div>
}

export default AddLocationForm
