import React, {Component} from 'react'

class Employee extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    let employee = this.props

    return <div className="col-lg-4">
      <div className="contact-box">
        <div className="col-sm-4">
          <img alt="image" className="img-circle m-t-xs img-responsive" src={employee.photo}></img>
        </div>
        <div className="col-sm-8">
          <h3><strong>{employee.fullname}</strong></h3>
          <p>{employee.position}</p>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  }
}

export default Employee