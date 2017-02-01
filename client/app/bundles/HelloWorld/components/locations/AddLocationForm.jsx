import React, { Component } from 'react'
import * as actions from '../../actions/MainActionCreators'

class AddLocationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullname: '',
    }
  }

  handleChangeFullname = (event) => {
    this.setState({fullname: event.target.value})
  }

  submitAddLocation = () => {
    console.log('submit add location')
  }

  render = () =>
    <div className="ibox float-e-margins">
      <div className="ibox-content">
        <div className="form-group">
          <label className="col-sm-2 control-label">Название</label>
          <input
            type="text"
            className="form-control"
            value={this.state.fullname}
            onChange={this.handleChangeFullname}
          >
          </input>
        </div>
        <div className="form-group">
          <button calssName="btn btn-default" onClick={actions.updateName.bind(this, 'test')}>
            <i className="fa fa-check"></i>
          </button>
        </div>
      </div>
    </div>
}

export default AddLocationForm
