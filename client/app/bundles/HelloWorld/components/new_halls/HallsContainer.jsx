import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/halls';
import * as lib from '../../lib'
import _HallForm from './_HallForm'
import IBox from '../layouts/IBox'
import CollectionContainer from '../base_containers/CollectionContainer'
import Places from './PlacesContainer'
// import MenuItems from './MenuItemsContainer'


class Halls extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount = () => { this.props.fetchHalls(); }

  configMode = () => { return this.props.route && this.props.route.config_mode || this.props.config_mode || "false" }

  handleCreate = (element) => { console.log('createElement'); console.log(element); this.props.createHall(element) }
  handleDelete = (element) => { console.log('deleteElement'); this.props.deleteHall(element) }
  handleEdit = (element) => { console.log('deleteElement'); this.props.editHall(element) }

  handleClickPlace = (place) => { this.props.handleClickPlace(place) }

  categoryForm = (handleChange, element) => {
    return <div className="row">
      <_HallForm handleChange={handleChange} element={element}/>
    </div>
  }
  renderHall = (hall, CRUD) => {
    let title = () => {
      return <div>
        <div className="inline">{hall.title}</div>
        <div className="inline"> {CRUD(hall)}</div>
      </div>
    }

    return <IBox
      collapsAble="true"
      collapsed="true"
      title={title()}
    >
      <Places hall_id={hall.id} config_mode={this.configMode()}/>
    </IBox>
  }
  render = () => {
    // let halls = lib.filterByKeysValues(
    //     this.props.halls || {},
    //     {'menu_department_id': this.props.menu_department_id}
    //   ) || {}
    let halls = this.props.halls
    // let newElement = {menu_department_id: this.props.menu_department_id}
    let newElement = {title: ""}

    // collectionLayout={this.collectionLayout}
    return <div id="halls">
      <CollectionContainer
        handleCreate={this.handleCreate}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        newElement={newElement}
        elementForm={this.categoryForm}
        elements={halls}
        renderElement={this.renderHall}
        config_mode={this.configMode()}
      />
    </div>
  }
}

const mapStateToProps = (state) => ({halls: state.halls, halls_to_places: state.halls_to_places})

export default connect(mapStateToProps, actions)(Halls)