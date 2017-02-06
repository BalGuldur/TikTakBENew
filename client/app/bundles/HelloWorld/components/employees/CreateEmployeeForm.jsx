import React, { Component } from 'react'

class CreateEmployeeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newEmployee: {},
      step: 1,
      buttonsIsDisable: '',
    }
  }
  componentWillUnmount() {
    this.setState({newEmployee: {}, step: 1})
  }

  handleChange = (key, e) => {
    let employee = this.state.newEmployee
    employee[key] = e.target.value
    this.setState({newEmployee: employee})
  }
  nextStep = () => {
    this.setState({buttonsIsDisable: 'disabled'})
    this.props.createEmployee(this.state.newEmployee)
    this.setState({step: 2})
  }

  renderButtons = () =>
    <div className="ibox-content">
      <div className="form-group pull-right">
        <button className={"btn btn-default "+this.state.buttonsIsDisable} type="button" onClick={this.props.closeModal}>Отменить</button>
        <button className={"btn btn-primary "+this.state.buttonsIsDisable} type="button" onClick={this.nextStep}>Пригласить</button>
      </div>
    </div>
  renderForm = () =>
    <form className="form-horizontal">
      <p>Приглашение сотрудника</p>
      <div className="form-group">
        <div className="col-lg-10">
          <input type="text" placeholder="Полное имя" className="form-control" onChange={this.handleChange.bind(this, 'fullname')}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-lg-10">
          <input type="text" placeholder="Должность" className="form-control" onChange={this.handleChange.bind(this, 'position')}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-lg-10">
          <input type="email" placeholder="email" className="form-control" onChange={this.handleChange.bind(this, 'email')}/>
        </div>
      </div>
      {this.renderButtons()}
    </form>
  renderResult = () =>
    <div>
      <h3>Сотрудник создан</h3>
      <p>Ссылка для авторизации сотрудника (действует один раз)</p>
      <p>{this.props.auth_link}</p>
      <p>На указанную почту отправлена ссылка для авторизации</p>
    </div>
  renderStep = () => {
    switch (this.state.step) {
      case 1:
        return <div>{this.renderForm()}</div>
        break;
      case 2:
        return <div>{this.renderResult()}</div>
        break;
      default:
        this.renderForm()
    }
  }
  render = () => {
    return <div className="row">
      {this.renderStep()}
    </div>
  }
}

export default CreateEmployeeForm