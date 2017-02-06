import React, { Component } from 'react'

class CreateEmployeeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newEmployee: {},
      step: 1,
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
  createEmployee = () => {
    console.log('create employee: '+this.state.newEmployee)
  }


  render = () => {
    return <form className="form-horizontal">
      <p>Приглашение сотрудника</p>
      <div className="form-group">
        <div className="col-lg-10">
          <input type="text" placeholder="Полное имя" className="form-control" onChange={this.handleChange.bind(this, 'fullname')}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-lg-10">
          <input type="text" placeholder="Должность" className="form-control" onChange={this.handleChange.bind(this, 'employee_postion')}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-lg-10">
          <input type="email" placeholder="email" className="form-control" onChange={this.handleChange.bind(this, 'email')}/>
        </div>
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="button">Пригласить</button>
      </div>
    </form>
  }
}

export default CreateEmployeeForm