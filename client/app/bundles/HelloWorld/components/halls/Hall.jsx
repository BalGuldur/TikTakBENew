import React, { Component } from 'react'
import MyModal from '../base_elements/MyModal'
import EditHallForm from './EditHallForm'
import Places from './Places'

class Hall extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editModalIsOpen: false,
    }
  }

  closeModal = () => { this.setState({editModalIsOpen: false}) }
  openModal = () => { this.setState({editModalIsOpen: true})}
  editHall = () => {
    console.log('edit Hall')
    this.openModal()
  }
  deleteHall = () => {
    console.log('delete Hall')
    this.props.deleteHall(this.props.hall)
  }

  renderButton = () => {
    if (this.props.config_mode == "true") {
      return <div>
        <i
          className="fa btn btn-sm btn-danger small inline pull-right fa-trash"
          onClick={this.deleteHall}
        ></i>
        <i
          className="fa btn btn-sm btn-primary small inline pull-right fa-pencil"
          onClick={this.editHall}
        ></i>
      </div> }
  }
  renderAddButton = () => {
    if (this.props.config_mode == "true") {
      return <MyModal
        header="Редактирование Зала"
        isOpen={this.state.editModalIsOpen}
        closeModal={this.closeModal}
        emptyFooter="true"
      >
        <EditHallForm {...this.props} closeModal={this.closeModal} />
      </MyModal>
    }
  }
  renderPlaces = () => <Places {...this.props} />
  render = () => {
    let hall = this.props.hall

    return <div className="col-md-6 col-lg-4">
      {this.renderAddButton()}
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
          {this.renderPlaces()}
        </div>
      </div>
    </div>
  }
}

export default Hall
