import React from 'react'

const MenuItem = (props) =>
  <li>
    <a href={props.link}>
      <i className={props.icon}/>
      <span className="nav-label">{props.title}</span>
    </a>
  </li>

export {MenuItem}

