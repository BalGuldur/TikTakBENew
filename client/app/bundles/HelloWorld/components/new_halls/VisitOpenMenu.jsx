import React, { Component } from 'react'
import MyButton from '../base_elements/MyButton'

const VisitOpenMenu = (props) => {
  let element = props.element || {}

  return <div>
    <MyButton
      className="btn btn-default"
      handleClick={props.handleClick.bind(this, "close", element)}
    >Закрыть</MyButton>
  </div>
}

export default VisitOpenMenu