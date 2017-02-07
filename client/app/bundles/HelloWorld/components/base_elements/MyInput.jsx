import React from 'react'

const MyInput = (props) => {
  let lgWide = props.lgWide || "col-lg-12"
  let type = props.inputType || "text"
  let placeholder = props.placeholder || ""
  let handleChange = props.handleChange
  let name = props.inputName
  let value = props.inputValue || ''

  return <div className="form-group">
    <div className={lgWide}>
      <input type={type} placeholder={placeholder} className="form-control"
             onChange={props.handleChange.bind(this, name)}
             value={props.inputValue || ''}
      />
    </div>
  </div>
}

export default MyInput