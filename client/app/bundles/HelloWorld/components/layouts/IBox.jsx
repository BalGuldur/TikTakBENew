import React, { Component } from 'react'

class IBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: this.props.collapsed || false,
    }
  }

  collapsHideStyle = () => {
    if (this.state.collapsed) {return " hidden"} else {return ""}
  }
  changeCollapsed = () => {
    this.setState({collapsed: !this.state.collapsed})
  }
  collapsAble = () => {
    return this.props.collapsAble || (() => {
        if (this.props.collapsed !== undefined) {
          return "true"
        } else {
          return "false"
        }
      })
  }
  hideTitle = () => {
    if (this.props.title === undefined) {
      return " hidden"
    } else {
      return ""
    }
  }
  render = () => {
    return <div className="ibox float-e-margins">
      <div
        className={"ibox-title" + this.hideTitle()}
        onClick={this.changeCollapsed}
      >
        <div>
          {this.props.title}
        </div>
      </div>
      <div className={"ibox-content" + this.collapsHideStyle()}>
        {this.props.children}
      </div>
    </div>
  }
}

export default IBox