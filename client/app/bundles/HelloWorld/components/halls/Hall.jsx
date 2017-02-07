import React, { Component } from 'react'

class Hall extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    let hall = this.props.hall

    return <div className="col-lg-4">
      <div className="ibox">
        <div className="ibox-title">
          <div>{hall.title}</div>
        </div>
        <div className="ibox-content">
          <div>Places</div>
        </div>
      </div>
    </div>
  }
}

export default Hall
