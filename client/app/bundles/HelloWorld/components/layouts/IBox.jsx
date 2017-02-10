import React, { Component } from 'react'

// collapsed - "true"
// collapsAble - "true" "false"
// title - text
class IBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // TODO: Изменить логику задачи collapsed (сейчас задается boolean но передается в параметрах text
      // Если передать "false" в collapsed, то все равно будет восприниматься как true
      collapsed: this.props.collapsed || false,
    }
  }

  changeCollapsed = () => {
    console.log('change')
    if (this.props.collapsAble=="true") { this.setState({collapsed: !this.state.collapsed}) }
  }

  footerStyle = () => { if (this.props.footer === undefined) {return "footer hidden"} else {return "ibox-footer"}}
  collapsHideStyle = () => { if (this.state.collapsed) {return " hidden"} else {return ""} }
  hideTitle = () => { if (this.props.title === undefined) { return " hidden" } else { return "" } }
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
      <div className={this.footerStyle()}>
        {this.props.footer}
      </div>
    </div>
  }
}

export default IBox