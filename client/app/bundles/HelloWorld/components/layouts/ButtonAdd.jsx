import React from 'react'

const ButtonAdd = (props) =>
  <i
    className="fa fa-plus-circle fa-2x pull-right btn"
    onClick={props.handleClick}
  >
    {props.children}
  </i>

export default ButtonAdd