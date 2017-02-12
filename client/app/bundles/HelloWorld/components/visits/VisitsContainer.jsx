import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/visits'

class Visits extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount = () => { console.log('fetch visits'); this.props.fetchVisits(); }

  render = () =>
    <div>Test Visits</div>
}

const mapStateToProps = (state) => ({visits: state.visits})

export default connect(mapStateToProps, actions)(Visits)