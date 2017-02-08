import React, { Component } from 'react'
import MyModal from '../base_elements/MyModal'
import PlaceFrom from './PlaceForm'

class Place extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editModalIsOpen: false,
    }
  }

  closeModal = () => { this.setState({editModalIsOpen: false}) }
  openModal = () => { this.setState({editModalIsOpen: true})}
  deletePlace = () => {
    console.log('delete Place')
    this.props.deletePlace(this.props.place)
  }

  renderButton = () =>
    <div>
      <i
        className="fa btn btn-sm btn-danger small inline pull-right fa-trash"
        onClick={this.deletePlace}
      ></i>
      <i
        className="fa btn btn-sm btn-primary small inline pull-right fa-pencil"
        onClick={this.openModal}
      ></i>
    </div>
  render = () => {
    let place = this.props.place

    return <div className="row">
      <MyModal
        header="Редактирование Зала"
        isOpen={this.state.editModalIsOpen}
        closeModal={this.closeModal}
        emptyFooter="true"
      >
        <PlaceFrom
          {...this.props}
          closeModal={this.closeModal}
          handleSubmit={this.props.editPlace}
          submitButtonTitle="Изменить"
          element={place}
        ></PlaceFrom>
      </MyModal>
        <div className="col-xs-6">{place.title}</div>
        <div className="col-xs-2">{place.capacity}</div>
        <div className="col-xs-4">
          {this.renderButton()}
        </div>
    </div>
  }
}

export default Place
