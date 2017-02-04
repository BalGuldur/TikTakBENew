import React, { Component } from 'react'
import AddLocation from './AddLocation'

class Locations extends Component {
  constructor(props) {
    super(props)
  }

  renderLocation = (location) =>
    <div>Test location</div>

  render = () => {
    return <div className="wrapper wrapper-content animated fadeInRight">
      <div className="row wrapper border-bottom white-bg">
        <AddLocation {...this.props} />
      </div>
      <div className="row">
        {this.props.locations.map(this.renderLocation)}
      </div>
    </div>
  }
}

export default Locations