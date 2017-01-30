import React, {Component} from 'react';
import {DropDown} from '../components/base_elements/DropDown.jsx'

class UserInfo extends Component {
  constructor(props) {
    super(props)
  }

  render = () =>
    <DropDown>
    {/*<a data-toggle="dropdown" className="dropdown-toggle" href="#" aria-expanded="false">*/}
      <span>
        <img alt="image" className="img-circle" src={this.props.current_user.photo}/>
      </span>
      <span className="clear">
        <span className="block m-t-xs">
          <strong className="font-bold">
            {this.props.current_user.fullname}
            <b className="caret"/>
          </strong>
        </span>
        <span className="block m-t-xs">
          {/* TODO: Сделать вывод должности */}
          Тут должность будет
        </span>
      </span>
      <ul className="dropdown-menu animated fadeInRight m-t-xs">
        <li>
          <a href="/logout">Выйти</a>
        </li>
      </ul>
    </DropDown>
}

export {UserInfo}