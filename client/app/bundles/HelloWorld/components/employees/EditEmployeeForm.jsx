import React, { Component } from 'react'
import EmployeeForm from './_EmployeeForm'

class EditEmployeeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editedEmployee: this.props.employee,
      buttonIsDisable: '',
    }
  }

  handleChange = (key, e) => {
    let employee = this.state.editedEmployee
    employee[key] = e.target.value
    this.setState({editedEmployee: employee})
  }
  submitEdit = () => {
    this.setState({buttonsIsDisable: 'disabled'})
    this.props.editEmployee(this.state.editedEmployee)
    this.setState({buttonsIsDisable: ''})
    this.props.closeModal()
  }

  renderButtons = () =>
    <div className="ibox-content">
      <div className="form-group pull-right">
        <button className={"btn btn-default "+this.state.buttonsIsDisable} type="button" onClick={this.props.closeModal}>Отменить</button>
        <button className={"btn btn-primary "+this.state.buttonsIsDisable} type="button" onClick={this.submitEdit}>Применить</button>
      </div>
    </div>
  renderForm = () =>
    <form className="form-horizontal">
      <EmployeeForm handleChange={this.handleChange} {...this.state.editedEmployee} />
      {this.renderButtons()}
    </form>
  render = () => {
    return <div className="row">
      {this.renderForm()}
    </div>
  }
}

export default EditEmployeeForm