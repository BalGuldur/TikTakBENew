import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as lib from '../../lib'
import Place from './Place'
import _PlaceForm from './_PlaceForm'
// import IBox from '../layouts/IBox'
import CollectionContainer from '../base_containers/CollectionContainer'
import * as actions from '../../actions/places'


class Places extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount = () => { this.props.fetchPlaces(); }

  configMode = () => { return this.props.route && this.props.route.config_mode || this.props.config_mode || "false" }

  handleCreate = (element) => { console.log('createElement'); console.log(element); this.props.createPlace(element) }
  handleDelete = (element) => { console.log('deleteElement'); this.props.deletePlace(element) }
  handleEdit = (element) => { console.log('deleteElement'); this.props.editPlace(element) }

  choosedStyle = (element) => {
    if (~this.props.choosed_places.indexOf(element.id))
      return " bg-muted"
    else
      return ""
  }

  placeForm = (handleChange, element) => {
    return <div className="row">
      <_PlaceForm handleChange={handleChange} element={element}/>
    </div>
  }
  renderPlace = (element, CRUD) =>
    <li className={"list-group-item" + this.choosedStyle(element)}>
      <div className="row">
        <Place element={element} clickPlace={this.props.clickPlace.bind(this, element)}/>
        <div className="col-xs-2 pull-right">{CRUD()}</div>
      </div>
    </li>
  render = () => {
    let places = lib.filterByKeysValues(
      this.props.places || {},
      {'hall_id': this.props.hall_id}
    ) || {}
    let newElement = {hall_id: this.props.hall_id}

    // collectionLayout={this.collectionLayout}
    return <div id="places">
      <ul className="list-group">
          <CollectionContainer
            handleCreate={this.handleCreate}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            newElement={newElement}
            elementForm={this.placeForm}
            elements={places}
            renderElement={this.renderPlace}
            config_mode={this.configMode()}
          />
      </ul>
    </div>
  }
}

const mapStateToProps = (state) => ({places: state.places, choosed_places: state.choosed_places})

export default connect(mapStateToProps, actions)(Places)