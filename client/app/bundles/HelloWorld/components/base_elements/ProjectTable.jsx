import React, { Component } from 'react'

class ProjectTable extends Component {
  constructor(props) {
    super(props)
  }

  renderActions = (element) => {
    if (this.props.actions) {
      return <td className="project-actions">{this.props.actions(element)}</td>
    } else {
      return null
    }
  }

  renderTitle = (element) => {
    if (this.props.titleKey) {
      return <td className="project-title">{element[this.props.titleKey]}</td>
    } else {
      return null
    }
  }

  renderElement = (element) =>
    <tr key={element.id} >
      {this.renderTitle(element)}
      {this.renderActions(element)}
    </tr>

  render = () =>
    <div className="ibox">
      <div className="ibox-title">
        <h5>{this.props.title}</h5>
      </div>
      <div className="ibox-content">
        <div className="project-list">
          <table className="table table-hover">
            <tbody>
              {this.props.elements.map(this.renderElement)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
}

export default ProjectTable