import React from 'react'

const Place = (props) =>
  <div>
    <div
      className="col-xs-6"
      onClick={props.clickPlace.bind(this, props.element)}
    >
      <div className="inline col-xs-8">{props.element.title}</div>
      <div className="inline col-xs-4">{props.element.capacity}</div>
    </div>
    {props.children}
  </div>

export default Place