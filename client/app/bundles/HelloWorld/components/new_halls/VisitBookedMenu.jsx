import React, { Component } from 'react'
import MyButton from '../base_elements/MyButton'

const VisitBookedMenu = (props) => {
  let element = props.element || {}

  return <div>
    <MyButton
      className="btn btn-default"
      handleClick={props.handleClick.bind(this, "open", element)}
    >Открыть стол</MyButton>
    <MyButton
      className="btn btn-default"
      handleClick={props.handleClick.bind(this, "open", element)}
    >Удалить бронь</MyButton>
  </div>
}

export default VisitBookedMenu