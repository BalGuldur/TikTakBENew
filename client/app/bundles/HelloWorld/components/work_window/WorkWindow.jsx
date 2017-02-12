import React, {Component} from 'react'
import Halls from '../new_halls/HallsContainer'
import ButtonWithChild from '../base_containers/CRUD/ButtonWithChild'
import StandartForm from '../base_containers/StandartForm'
import OpenPlaceForm from './OpenPlaceForm'
import IBox from '../layouts/IBox'
import Visits from '../visits/VisitsContainer'

class WorkWindow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openInformation: {},
    }
  }
  componentDidMount() { this.props.initialUserSubscriptions() }
  componentWillUnmount() { this.props.cancelAllUserSubscriptions() }

  disabledOpenButton = () => {if(this.props.choosed_places.length > 0) return "false"; else return "true"}

  modalSubmit = () => {
    console.log('Open place log')
    console.log({...this.state.openInformation, place_ids: this.props.choosed_places})
    this.props.openVisit({...this.state.openInformation, place_ids: this.props.choosed_places})
  }
  handleChange = (key, e) => {
    let element = {}
    element[key] = e.target.value
    this.setState({openInformation: Object.assign({}, this.state.openInformation, element)})
    // this.setState({editedElement: element})
  }

  render = () => {
  return <div id="work_window">
    <ButtonWithChild
      buttonTitle="Открыть стол"
      buttonStyle="btn btn-default"
      childrenType="modal"
      modalHeader="Открыть стол"
      modalSubmit={this.modalSubmit}
      modalSubmitTitle="Открыть"
      disabled={this.disabledOpenButton()}
    >
      <div className="row">
        <OpenPlaceForm handleChange={this.handleChange} element={this.state.openInformation}/>
      </div>
    </ButtonWithChild>
    <Visits/>
  </div>
  }
}

export default WorkWindow