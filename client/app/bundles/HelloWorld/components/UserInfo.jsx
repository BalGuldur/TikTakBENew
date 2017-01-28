import React, {Component} from 'react';

const UserInfo = (props) =>
  <div className="profile-element">
      <span className="clear">
        <span className="block m-t-xs">
          <strong className="font-bold">
            {props.current_user.fullname}
          </strong>
        </span>
        <span className="block m-t-xs">
          {/* TODO: Сделать вывод должности */}
          Тут должность будет
        </span>
      </span>
    </div>


export {UserInfo}