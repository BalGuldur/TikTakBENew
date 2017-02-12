import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/visits'

class Visits extends Component {
  constructor(props) {
    super(props)
  }

  renderVisit = (key) => {
    let visit = this.props.visits[key]
    let visitStyle = () => { return visit.opened ? " bg-success" : ""}

    return <div
      key={key}
      className={visitStyle()}
    >
      <small>{visit.qty_people} {visit.opened_at_time}</small>
    </div>
  }
  render = () => {
    let visit_ids = this.props.place_to_visits[this.props.place.id] || []
    let visits = {}
    visit_ids.map(
      (key) => visits[key] = this.props.visits[key]
    )
    console.log(visits)

    return <div>
      {visit_ids.map(this.renderVisit)}
    </div>
  }
}

const mapStateToProps = (state) => ({
  visits: state.visits,
  place_to_visits: state.place_to_visits,
})

export default connect(mapStateToProps, actions)(Visits)