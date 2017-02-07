import React, { Component } from 'react'

class Hall extends Component {
  constructor(props) {
    super(props)
  }

  editHall = () => {
    console.log('edit Hall')
  }
  deleteHall = () => {
    console.log('delete Hall')
    this.props.deleteHall(this.props.hall)
  }

  renderButton = () =>
    <div>
      <i
        className="fa btn btn-sm btn-danger small inline pull-right fa-trash"
        onClick={this.deleteHall}
      ></i>
      <i
        className="fa btn btn-sm btn-primary small inline pull-right fa-pencil"
        onClick={this.editHall}
      ></i>
    </div>
  render = () => {
    let hall = this.props.hall

    return <div className="col-md-6 col-lg-4">
      <div className="ibox">
        <div className="ibox-title">
          <div className="row">
            <div className="col-xs-8">{hall.title}</div>
            <div className="col-xs-4">
              {this.renderButton()}
            </div>
          </div>
        </div>
        <div className="ibox-content">
          <div>Places</div>
        </div>
      </div>
    </div>
  }
}

export default Hall
