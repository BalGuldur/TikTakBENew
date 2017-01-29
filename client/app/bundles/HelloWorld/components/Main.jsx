import React, { PropTypes } from 'react';
import {SideNavBar} from '../components/SideNavBar.jsx'
import { Link } from 'react-router'

const Main = (props) => (
  <div id="wrapper">
    <SideNavBar {...props} />
    <div id="page-wrapper" className="gray-bg dashboard-1">
      <div className="row border-bottom white-bg dashboard-header">
        <h3>
          Hello, {props.name}!
        </h3>
        <Link to="/test">Test link</Link>
        {props.children}
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={props.name}
            onChange={(e) => updateName(e.target.value)}
          />
        </form>
      </div>
    </div>
  </div>
);

// HelloWorld.propTypes = {
//   name: PropTypes.string.isRequired,
//   updateName: PropTypes.func.isRequired,
// };

export default Main;
