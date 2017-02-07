import React, {Component} from 'react'
// import Hall from './Hall'
import MyModal from '../base_elements/MyModal'
import PlaceForm from './PlaceForm'
// import CreateHallForm from './CreateHallForm'

class Places extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalPlaceIsOpen: false,
    }
  }

  closeModal = () => { this.setState({modalPlaceIsOpen: false}) }
  openModal = () => { this.setState({modalPlaceIsOpen: true}) }

  createPlace = () => {console.log('try create place')}

  renderAddButton = () =>
    <div className="row">
      <div className="col-sm-2 pull-right">
      <button className="btn btn-sm btn-primary pull-right" onClick={this.openModal}>
        <i className="fa fa-plus"></i>
      </button>
      </div>
    </div>
  renderPlace = (key, element) =>
    <Hall key={key} place={this.props.places[key]} {...this.props} />
  renderPlaces = () => {
    return <div id="places">
      {Object.keys(this.props.places || {}).map(this.renderPlace)}
    </div>
  }
  render = () => {
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
          handleSubmit={this.createPlace}
          submitButtonTitle="Создать"
        />
      </MyModal>
      {this.renderPlaces()}
      {this.renderAddButton()}
    </div>
  }
}

export default Places