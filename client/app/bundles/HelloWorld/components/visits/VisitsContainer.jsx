import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/visits'
import Halls from '../new_halls/HallsContainer'

class Visits extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount = () => { console.log('fetch visits'); this.props.fetchVisits(); }

  render = () =>
    <Halls/>
}

const mapStateToProps = (state) => ({visits: state.visits})

export default connect(mapStateToProps, actions)(Visits)