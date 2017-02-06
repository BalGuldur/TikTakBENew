import React, { Component } from 'react'

class Employees extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchEmployees()
  }

  componentDidMount() {
    this.props.initialUserSubscriptions()
    // this.props.fetchEmployees()
  }

  componentWillUnmount() {
    this.props.cancelAllUserSubscriptions()
  }

  renderEmployee = (employee) =>
    <div key={employee.id}>
      <div className="col-lg-4">
        <div className="contact-box">
          <div className="col-sm-4">
            <img alt="image" className="img-circle m-t-xs img-responsive" src=""></img>
          </div>
          <div className="col-sm-8">
            <h3><strong>{employee.fullname}</strong></h3>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>

  renderEmployees = () => {
    if(this.props.employees == '') {
      return <div className="row">Нет сотрудников</div>
    } else {
      return <div className="row">{this.props.employees.map(this.renderEmployee)}</div>
      // this.props.employees.map(this.renderEmployee)
    }
  }

  render = () => {
    return <div>
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="ibox">
          <div className="ibox-content">
            {this.renderEmployees()}
          </div>
        </div>
      </div>
    </div>
  }
}

export default Employees