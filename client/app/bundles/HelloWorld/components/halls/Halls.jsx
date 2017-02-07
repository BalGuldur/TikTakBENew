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

  renderHall = (key, element) =>
    <Hall key={key} hall={this.props.halls[key]} {...this.props} />
  // renderHalls = () => {
  //   if (this.props.halls == '') {
  //     return <div className="row">Нет залов</div>
  //   } else {
  //     return <div className="row">
  //         {Object.keys(this.props.halls).map(this.renderHall.bind())}
  //       </div>
  //   }
  // }
  renderHalls = () => {
    return <div className="row">
      {Object.keys(this.props.halls || {}).map(this.renderHall)}
    </div>
  }
  render = () => {
    return <div id="halls">
      <MyModal
        header="Создание зала"
        closeModal={this.closeModal}
        isOpen={this.state.modalHallIsOpen}
        emptyFooter="true"
      >
        <CreateHallForm {...this.props} closeModal={this.closeModal}/>
      </MyModal>
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="ibox">
          <div className="ibox-content">
            <button className="btn btn-default" onClick={this.openModal}>Создать зал</button>
          </div>
        </div>
        {this.renderHalls()}
      </div>
    </div>
  }
}

export default Halls