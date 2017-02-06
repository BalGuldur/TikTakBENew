import React, { Component } from 'react'

class Employees extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.initialUserSubscriptions()
    this.props.fetchEmployees()
  }

  componentWillUnmount() {
    this.props.cancelAllUserSubscriptions()
  }

  render = () => {
    return <div>
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="ibox">
          <div className="ibox-content">
            Test Employees
          </div>
        </div>
      </div>
    </div>
  }
}

export default Employees