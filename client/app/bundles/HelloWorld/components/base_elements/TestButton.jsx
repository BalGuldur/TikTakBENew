import React from 'react'

const TestButton = (props) =>
  <button
    className="btn btn-default"
    onClick={props.addFayeChannel.bind(this, 'test button press')}
  >
  {props.children}
  </button>

export default TestButton