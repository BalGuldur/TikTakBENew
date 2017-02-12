import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/visits'
import MyModal from '../base_containers/CRUD/MyModal'
import VisitOpenMenu from './VisitOpenMenu'

class Visits extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentVisit: {},
      visitModalIsOpen: false,
    }
  }

  openModal = (visit) => {
    this.setState({
      currentVisit: visit,
      visitModalIsOpen: true,
    })
  }
  closeModal = () => {
    this.setState({currentVisit: {}, visitModalIsOpen: false})
  }
  handleClick = (type, element) => {
    this.closeModal()
    switch (type) {
      case 'close':
        this.props.closeVisit(element)
        break
      default:
        console.log('not response type')
    }
  }

  renderVisit = (key) => {
    let visit = this.props.visits[key]
    if (!visit.closed) {
      let visitStyle = () => {
        return visit.opened ? " bg-success" : ""
      }

      return <div
        key={key}
        className={visitStyle()}
        onClick={this.openModal.bind(this, visit)}
      >
        <small>{visit.qty_people} {visit.opened_at_time}</small>
      </div>
    } else { return " "}
  }
  render = () => {
    let visit_ids = this.props.place_to_visits[this.props.place.id] || []
    let visits = {}
    visit_ids.map(
      (key) => visits[key] = this.props.visits[key]
    )

    return <div>
      <MyModal
        isOpen={this.state.visitModalIsOpen}
        header="Управление открытым столом"
        hideFooter="true"
        modalClose={this.closeModal}
      >
        <VisitOpenMenu element={this.state.currentVisit} handleClick={this.handleClick} />
      </MyModal>
      {visit_ids.map(this.renderVisit)}
    </div>
  }
}

const mapStateToProps = (state) => ({
  visits: state.visits,
  place_to_visits: state.place_to_visits,
})

export default connect(mapStateToProps, actions)(Visits)