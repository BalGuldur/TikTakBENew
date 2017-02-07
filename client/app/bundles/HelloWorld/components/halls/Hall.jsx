import React, { Component } from 'react'

class Hall extends Component {
  constructor(props) {
    super(props)
  }

  render = () =>
    <div>Test Hall {this.props.hall.id}</div>
}

export default Hall
