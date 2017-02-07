import React, {Component} from 'react'
import Employee from './Employee'
import MyModal from '../base_elements/MyModal'
import CreateEmployeeForm from './CreateEmployeeForm'

class Employees extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
    }
  }
  componentWillMount() {
    console.log('employees will mount')
    this.props.fetchEmployees()
  }
  componentDidMount() {
    this.props.initialUserSubscriptions()
    // this.props.fetchEmployees()
  }
  componentWillUnmount() {
    this.props.cancelAllUserSubscriptions()
  }


  closeModal = () => {
    this.setState({modalIsOpen: false})
  }
  openModal = () => {
    this.setState({
      modalIsOpen: true,
    })
  }

  renderEmployee = (employee) =>
    <Employee key={employee.id} {...this.props} employee={employee} />
  renderEmployees = () => {
    if (this.props.employees == '') {
      return <div className="row">Нет сотрудников</div>
    } else {
      return <div className="row">{this.props.employees.map(this.renderEmployee)}</div>
      // this.props.employees.map(this.renderEmployee)
    }
  }
  render = () => {
    return <div id="employees">
      <MyModal
        header="Приглашение сотрудника"
        closeModal={this.closeModal}
        isOpen={this.state.modalIsOpen}
        emptyFooter="true"
      >
        <CreateEmployeeForm {...this.props} closeModal={this.closeModal}/>
      </MyModal>
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="ibox">
          <div className="ibox-content">
            <button className="btn btn-default" onClick={this.openModal}>Пригласить сотурдника</button>
          </div>
        </div>
        {this.renderEmployees()}
      </div>
    </div>
  }
}

export default Employees