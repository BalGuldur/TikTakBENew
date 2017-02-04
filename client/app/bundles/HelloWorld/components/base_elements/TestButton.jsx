import React from 'react'

const TestButton = (props) =>
  <button
    className="btn btn-default"
    onClick={props.handleTBClick}
  >
  {props.children}
  </button>

export default TestButton