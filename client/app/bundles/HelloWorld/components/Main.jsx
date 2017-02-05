import React, {Component, PropTypes} from 'react';
// import {SideNavBar} from '../components/SideNavBar.jsx'
import {Link} from 'react-router'

// import fayeSubscribe from '../faye/faye'
// import Client from '../faye/faye'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.initialUserSubscriptions()
  }

  componentWillUnmount() {
    this.props.cancelAllUserSubscriptions()
  }

  render = () =>
    <div className="row border-bottom white-bg dashboard-header">
      <h3>
        Hello, {this.props.name}!
      </h3>
      <Link to="/test">Test link</Link>
      <hr />
      <form >
        <label htmlFor="name">
          Say hello to:
        </label>
        <input
          id="name"
          type="text"
          value={this.props.name}
          onChange={(e) => this.props.updateName(e.target.value)}
        />
      </form>
    </div>
}


// HelloWorld.propTypes = {
//   name: PropTypes.string.isRequired,
//   updateName: PropTypes.func.isRequired,
// };

export default Main;
