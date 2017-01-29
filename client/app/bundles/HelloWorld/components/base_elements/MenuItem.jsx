import React from 'react'
import { Link } from 'react-router'

const MenuItem = (props) =>
  <li>
    <Link to={props.link}>
      <i className={props.icon}></i>
      <span className="nav-label">{props.title}</span>
    </Link>
  </li>

export {MenuItem}

