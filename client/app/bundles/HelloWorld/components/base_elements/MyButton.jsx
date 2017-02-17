import React, { Component } from 'react'

// handleClick - function - onClick
// className - text - class style
class MyButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      disabled: false
    }
  }

  buttonClick = () => {
    this.setState({disabled: true})
    this.props.handleClick()
    this.setState({disabled: false})
  }
  disabledClassName = () => { return (this.state.disabled) ? " disabled" : "" }
  buttonClassName = () => { return (this.props.className || "btn btn-default") + this.disabledClassName()}

  render = () =>
    <button
      onClick={this.buttonClick}
      className={this.buttonClassName()}
    >
      {this.props.children}
    </button>
}

export default MyButton