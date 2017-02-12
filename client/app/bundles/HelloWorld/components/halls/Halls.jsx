import React, {Component} from 'react'
import Hall from './Hall'
import MyModal from '../base_elements/MyModal'
import CreateHallForm from './CreateHallForm'

class Halls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalHallIsOpen: false,
    }
  }
  componentWillMount() {
    console.log('halls will mount')
    this.props.fetchHalls()
    this.props.fetchPlaces()
    // this.props.fetchEmployees()
  }
  componentDidMount() {
    this.props.initialUserSubscriptions()
    // this.props.fetchEmployees()
  }
  componentWillUnmount() {
    this.props.cancelAllUserSubscriptions()
  }

  closeModal = () => {
    this.setState({modalHallIsOpen: false})
  }
  openModal = () => {
    this.setState({
      modalHallIsOpen: true,
    })
  }

  configMode = () => { return this.props.route && this.props.route.config_mode || this.props.config_mode || "false"}
  renderHall = (key, element) => <Hall key={key} hall={this.props.halls[key]} {...this.props} config_mode={this.configMode()}/>
  renderHalls = () => {
    return <div className="row">
      {Object.keys(this.props.halls || {}).map(this.renderHall)}
    </div>
  }
  renderAdd = () => {
    if (this.configMode() == "true") {
      return <div className="ibox">
        <div className="ibox-content">
        <MyModal
          header="Создание зала"
          closeModal={this.closeModal}
          isOpen={this.state.modalHallIsOpen}
          emptyFooter="true"
        >
          <CreateHallForm {...this.props} closeModal={this.closeModal}/>
        </MyModal>
        <button className="btn btn-default" onClick={this.openModal}>Создать зал</button>
        </div>
      </div>
    }
  }
  render = () => {
    return <div id="halls">
      <div className="wrapper wrapper-content animated fadeInRight">
        {this.renderAdd()}
        {this.renderHalls()}
      </div>
    </div>
  }
}

export default Halls