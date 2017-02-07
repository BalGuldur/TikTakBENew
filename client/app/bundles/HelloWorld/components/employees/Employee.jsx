import React, {Component} from 'react'
import MyModal from '../base_elements/MyModal'
import EditEmployeeForm from './EditEmployeeForm'

class Employee extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editModalIsOpen: false,
      editedEmployee: {},
    }
  }

  closeModal = () => {
    this.setState({editModalIsOpen: false})
  }
  editEmployee = () => {
    console.log('try edit employee')
    this.setState({editModalIsOpen: true})
  }
  deleteEmployee = () => {
    this.props.deleteEmployee(this.props.employee)
  }

  renderEditModal = () =>
    <MyModal
      header="Редактирование сотрудника"
      closeModal={this.closeModal}
      isOpen={this.state.editModalIsOpen}
      emptyFooter="true"
    >
      <EditEmployeeForm {...this.props} closeModal={this.closeModal}/>
    </MyModal>
  renderButton = () =>
    <div className="col-sm-2">
      <button
        className="btn btn-sm btn-primary"
        onClick={this.editEmployee}
      >
        <i className="fa fa-pencil"></i>
      </button>
      <button
        className="btn btn-sm btn-danger"
        onClick={this.deleteEmployee}
      >
        <i className="fa fa-trash"></i>
      </button>
    </div>
  render = () => {
    let employee = this.props.employee

    return <div className="col-lg-4">
      {this.renderEditModal()}
      <div className="contact-box">
        <div className="col-sm-4">
          <img alt="image" className="img-circle m-t-xs img-responsive" src={employee.photo}></img>
        </div>
        <div className="col-sm-6">
          <h3 className="m-b-xs"><strong>{employee.fullname}</strong></h3>
          <div className="font-bold">{employee.position}</div>
          <div>{employee.email}</div>
        </div>
        {this.renderButton()}
        <div className="clearfix"></div>
      </div>
    </div>
  }
}

export default Employee