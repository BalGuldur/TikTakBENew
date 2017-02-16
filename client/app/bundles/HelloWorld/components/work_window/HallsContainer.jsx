import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/halls';
import Places from '../new_halls/PlacesContainer'
import NavTabs from '../base_elements/NavTabs'

class Halls extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
    this.props.fetchHalls();
  }

  handleClickPlace = (place) => {
    this.props.handleClickPlace(place)
  }

  renderPlaces = (hall) => {
    if (hall != undefined)
      return <Places hall_id={hall.id} />
  }

  render = () => {
    let halls = this.props.halls

    return <NavTabs
      elements={halls}
      elementsName="halls"
      renderTabTitle={(element) => {
        return <div>{element.title}</div>
      }}
      renderElement={this.renderPlaces}
    />
  }
}

const mapStateToProps = (state) => ({
  halls: state.halls,
  halls_to_places: state.halls_to_places,
})

export default connect(mapStateToProps, actions)(Halls)