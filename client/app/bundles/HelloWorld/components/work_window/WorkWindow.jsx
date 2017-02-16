import React, {Component} from 'react'
import Halls from './HallsContainer'
import ButtonWithChild from '../base_containers/CRUD/ButtonWithChild'
import StandartForm from '../base_containers/StandartForm'
import OpenPlaceForm from './OpenPlaceForm'
import BookingPlaceForm from './BookingPlaceForm'
import IBox from '../layouts/IBox'
import Visits from '../visits/VisitsContainer'
import MyDatePicker from '../base_elements/MyDatePicker'

class WorkWindow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openInformation: {},
      bookingInformation: {booked: true, opened:false},
    }
  }
  componentDidMount() { this.props.initialUserSubscriptions() }
  componentWillUnmount() { this.props.cancelAllUserSubscriptions() }

  disabledOpenButton = () => {if(this.props.choosed_places.length > 0) return "false"; else return "true"}
  disabledBookingButton = () => {if(this.props.choosed_places.length > 0) return "false"; else return "true"}

  handleChangeDate = (newDate) => {
    this.props.changeVisitsDate(newDate)
    this.props.fetchVisitsOnDate(newDate)
  }

  modalOpenSubmit = () => {
    this.props.openVisit({...this.state.openInformation, place_ids: this.props.choosed_places})
    this.setState({openInformation: {}})
  }
  modalBookingSubmit = () => {
    this.props.openVisit({...this.state.bookingInformation, place_ids: this.props.choosed_places})
    this.setState({bookingInformation: {booked: true, opened: false}})
  }
  handleOpenChange = (key, e) => {
    let element = {}
    key!="book_start" ? element[key] = e.target.value : element[key] = e
    this.setState({openInformation: Object.assign({}, this.state.openInformation, element)})
    // this.setState({editedElement: element})
  }
  handleBookingChange = (key, e) => {
    let element = {}
    key!="book_start" ? element[key] = e.target.value : element[key] = e
    this.setState({bookingInformation: Object.assign({}, this.state.bookingInformation, element)})
    // this.setState({editedElement: element})
  }

  render = () => {
  return <div id="work_window">
    <div className="row">
      <div className="col-sm-6">
        <ButtonWithChild
          buttonTitle="Открыть стол"
          buttonStyle="btn btn-default"
          childrenType="modal"
          modalHeader="Открыть стол"
          modalSubmit={this.modalOpenSubmit}
          modalSubmitTitle="Открыть"
          disabled={this.disabledOpenButton()}
        >
          <div className="row">
            <OpenPlaceForm handleChange={this.handleOpenChange} element={this.state.openInformation}/>
          </div>
        </ButtonWithChild>
        <ButtonWithChild
          buttonTitle="Забронировать на сегодня"
          buttonStyle="btn btn-default"
          childrenType="modal"
          modalHeader="Забронировать стол"
          modalSubmit={this.modalBookingSubmit}
          modalSubmitTitle="Забронировать"
          disabled={this.disabledBookingButton()}
        >
          <div className="row">
            <BookingPlaceForm handleChange={this.handleBookingChange} element={this.state.bookingInformation}/>
          </div>
        </ButtonWithChild>
      </div>
      <div className="col-sm-6">
        <MyDatePicker
          showClearButton={true}
          handleChange={this.handleChangeDate}
          showTodayButton={true}
        />
      </div>
    </div>
    <Visits/>
  </div>
  }
}

export default WorkWindow