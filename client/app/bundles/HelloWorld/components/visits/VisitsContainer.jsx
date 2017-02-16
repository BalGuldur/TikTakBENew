import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/visits'
import Halls from '../work_window/HallsContainer'

class Visits extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount = () => { console.log('fetch visits'); this.props.fetchVisits(this.props.visits_date); }

  render = () =>
    <Halls/>
}

const mapStateToProps = (state) => ({
  visits: state.visits,
  visits_date: state.visits_date,
})

export default connect(mapStateToProps, actions)(Visits)