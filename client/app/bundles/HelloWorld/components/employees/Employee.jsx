import React, {Component} from 'react'

class Employee extends Component {
  constructor(props) {
    super(props)
  }

  editEmployee = () => {
    console.log('try edit employee')
  }
  deleteEmployee = () => {
    this.props.deleteEmployee(this.props.employee)
  }

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
      <div className="contact-box">
        <div className="col-sm-4">
          <img alt="image" className="img-circle m-t-xs img-responsive" src={employee.photo}></img>
        </div>
        <div className="col-sm-6">
          <h3><strong>{employee.fullname}</strong></h3>
          <p>{employee.position}</p>
        </div>
        {this.renderButton()}
        <div className="clearfix"></div>
      </div>
    </div>
  }
}

export default Employee