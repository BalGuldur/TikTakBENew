import React, {Component} from 'react'
import MyModal from '../base_elements/MyModal'
import PlaceForm from './PlaceForm'
import Place from './Place'
import * as lib from '../../lib'

class Places extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalPlaceIsOpen: false,
    }
  }

  closeModal = () => { this.setState({modalPlaceIsOpen: false}) }
  openModal = () => { this.setState({modalPlaceIsOpen: true}) }

  renderAddButton = () =>
    <div className="row">
      <div className="col-sm-2 pull-right">
      <button className="btn btn-sm btn-primary pull-right" onClick={this.openModal}>
        <i className="fa fa-plus"></i>
      </button>
      </div>
    </div>
  renderPlace = (key) => {
    if(this.props.places[key] !== undefined) {
      return <Place key={key} place={this.props.places[key]} {...this.props} />
    }
  }
  renderPlaces = () => {
    return <div id="places">
      {/*{Object.keys(this.props.places || {}).map(this.renderPlace)}*/}
      {/*<div>Places</div>*/}
      {(this.props.halls_to_places[this.props.hall.id] || []).map(this.renderPlace)}
    </div>
  }
  render = () => {
    // Задаем для нового стола дефаултный id
    let new_place = {hall_id: this.props.hall.id}

    return <div id="halls">
      <MyModal
        header="Создание стола"
        closeModal={this.closeModal}
        isOpen={this.state.modalPlaceIsOpen}
        emptyFooter="true"
      >
        <PlaceForm
          {...this.props}
          closeModal={this.closeModal}
          handleSubmit={this.props.createPlace}
          submitButtonTitle="Создать"
          element={new_place}
        />
      </MyModal>
      <div className="row">
        <div className="col-xs-6">Название</div>
        <div className="col-xs-2"><small>Вместимость</small></div>
      </div>
      {this.renderPlaces()}
      {this.renderAddButton()}
    </div>
  }
}

export default Places