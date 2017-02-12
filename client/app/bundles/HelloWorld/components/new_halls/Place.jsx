import React from 'react'

const Place = (props) =>
  <div>
    <div
      onClick={props.clickPlace.bind(this, props.element)}
    >
      <div className="inline col-xs-7">{props.element.title}</div>
      <div className="inline col-xs-3">
        {props.element.capacity}<i className="fa fa-group" />
      </div>
    </div>
    {props.children}
  </div>

export default Place