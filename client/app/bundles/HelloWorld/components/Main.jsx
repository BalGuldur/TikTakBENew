import React, { PropTypes } from 'react';
import {SideNavBar} from '../components/SideNavBar.jsx'

const Main = (props) => (
  <div>
    <div id="wrapper">
      <SideNavBar {...props} />
      <div id="page-wrapper" className="gray-bg dashboard-1">
        <div className="row border-bottom white-bg dashboard-header">
          <h3>
            Hello, {props.name}!
          </h3>
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
  </div>
);

// HelloWorld.propTypes = {
//   name: PropTypes.string.isRequired,
//   updateName: PropTypes.func.isRequired,
// };

export default Main;
