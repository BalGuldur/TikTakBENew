import React, { Component } from 'react'

// renderElement(element) - function - рендер содержимого таба
// renderTabTitle(element) - function - рендер тайтла таба
// elementsName - text - название группы табов
// elements - Object - массив элементов в виде {id: {element}, id: {element}, ...}
class NavTabs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeElementKey: Object.keys(this.props.elements || {})[0]
    }
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.state.activeElementKey == undefined)
      this.setState({activeElementKey: Object.keys(this.props.elements || {})[0]})
  }

  changeActiveTab = (key) => {
    console.log('change active tab')
    console.log(key)
    this.setState({activeElementKey: key})
  }

  renderElementTab = (key) => {
    let element = this.props.elements[key]

    return <li key={key} className={this.state.activeElementKey == key ? "active" : ""}>
      <a
        onClick={this.changeActiveTab.bind(this, key)}
      >
        {this.props.renderTabTitle(element)}
      </a>
    </li>
  }

  renderElementContent = () => {
    let element = this.props.elements[this.state.activeElementKey]

    return <div className="tab-pane active">
        <div className="panel-body">
          {this.props.renderElement(element)}
        </div>
      </div>
  }

  render = () => {
    let elements = this.props.elements || {}

    if (elements != undefined) {
      return <div className="tabs-container">
        <ul className="nav nav-tabs">
          {Object.keys(elements).map(this.renderElementTab)}
        </ul>
        <div className="tabs-content">
          {/*{Object.keys(elements).map(this.renderElementContent)}*/}
          {this.renderElementContent()}
        </div>
      </div>
    } else { return <div className="tabs-container"></div>}
  }
}

export default NavTabs