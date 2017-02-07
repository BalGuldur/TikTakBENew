import React, {Component} from 'react'

class Halls extends Component {
  constructor(props) {
    super(props)

  }
  componentWillMount() {
    console.log('halls will mount')
    // this.props.fetchEmployees()
  }
  componentDidMount() {
    this.props.initialUserSubscriptions()
    // this.props.fetchEmployees()
  }
  componentWillUnmount() {
    this.props.cancelAllUserSubscriptions()
  }

  renderHalls = () =>
    <div>Test Halls</div>
  render = () => {
    return <div id="halls">
      <div className="wrapper wrapper-content animated fadeInRight">
        {this.renderHalls()}
      </div>
    </div>
  }
}

export default Halls