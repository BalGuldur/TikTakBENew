import React, { Component } from 'react'
import AddLocation from './AddLocation'
import ProjectTable from '../base_elements/ProjectTable'

class Locations extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.initialUserSubscriptions()
  }

  componentWillUnmount() {
    this.props.cancelAllUserSubscriptions()
  }

  renderLocationActions = (location) =>
    <div>
      <button
        className="btn btn-white btn-sm"
        icon=""
        onClick={this.props.chooseLocation.bind(this, location)}>
        Выбрать
      </button>
      <button
        className="btn btn-white btn-sm"
        icon=""
        onClick={this.props.deleteLocation.bind(this, location)}>
        Удалить
      </button>
    </div>

  render = () => {
    return <div className="wrapper wrapper-content animated fadeInRight">
      <div className="row wrapper border-bottom white-bg">
        <AddLocation {...this.props} />
      </div>
      {/*<div className="row">*/}
        {/*{this.props.locations.map(this.renderLocation)}*/}
      {/*</div>*/}
      <div className="row">
        <div className="col-lg-12">
          <div className="wrapper wrapper-content animated fadeInRight">
            <ProjectTable
              title="Проекты"
              elements={this.props.locations}
              titleKey="title"
              actions={this.renderLocationActions}
            />
          </div>
        </div>
      </div>
    </div>
  }
}

export default Locations