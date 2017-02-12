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
  // Задаем для нового стола дефаултный id
  newPlace = () => { return {hall_id: this.props.hall.id}}

  renderAddButton = () => {
    if (this.props.config_mode == "true") {
      return <div className="row">
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
            element={this.newPlace()}
          />
        </MyModal>
        <div className="col-sm-2 pull-right">
          <button className="btn btn-sm btn-primary pull-right" onClick={this.openModal}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    }
  }
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


    return <div id="halls">
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