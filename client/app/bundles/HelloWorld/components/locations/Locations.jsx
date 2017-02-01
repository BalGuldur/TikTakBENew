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
      <div>{this.props.name}</div>
      <div className="row wrapper border-bottom white-bg">
        <AddLocation {...this.props} actions={this.props.actions}/>
      </div>
      <div className="row">
        {this.props.locations.map(this.renderLocation)}
      </div>
      <input
        id="name"
        type="text"
        value={this.props.name}
        onChange={(e) => this.updateName(e.target.value)}
      />
    </div>
  }
}

export default Locations