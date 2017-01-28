import React, { PropTypes } from 'react';

const MainWorld = ({ name, current_user, updateName }) => (
  <div>
    <h3>
      Hello, {name}! Hello, {current_user.fullname}
    </h3>
    <hr />
    <form >
      <label htmlFor="name">
        Say hello to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
);

// HelloWorld.propTypes = {
//   name: PropTypes.string.isRequired,
//   updateName: PropTypes.func.isRequired,
// };

export default MainWorld;
