import React from 'react'

const EmployeeForm = (props) =>
  <div>
    <div className="form-group">
      <div className="col-lg-10">
        <input type="text" placeholder="Полное имя" className="form-control"
               onChange={props.handleChange.bind(this, 'fullname')}
               value={props.fullname || ''}
        />
      </div>
    </div>
    <div className="form-group">
      <div className="col-lg-10">
        <input type="text" placeholder="Должность" className="form-control"
               onChange={props.handleChange.bind(this, 'position')}
               value={props.position || ''}
        />
      </div>
    </div>
    <div className="form-group">
      <div className="col-lg-10">
        <input type="email" placeholder="email" className="form-control"
               onChange={props.handleChange.bind(this, 'email')}
               value={props.email || ''}
        />
      </div>
    </div>
  </div>

export default EmployeeForm