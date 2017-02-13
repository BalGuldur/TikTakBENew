import React from 'react'
import TimePicker from 'react-bootstrap-time-picker'

const MyInput = (props) => {
  let lgWide = props.lgWide || "col-lg-12"
  let type = props.inputType || "text"
  let placeholder = props.placeholder || ""
  let handleChange = props.handleChange
  let name = props.inputName
  let value = props.inputValue || ''

  let onChangeTime = (time) => {
    props.handleChange(name, time)
  }

  switch (type) {
    case "time":
      return <TimePicker
        step={props.step || 30}
        start={props.start || "11:00"}
        end={props.end || "23:59"}
        format={24}
        onChange={onChangeTime}
        initialValue={props.inputValue}
      >
      </TimePicker>
    default:
      return <div className="form-group">
        <div className={lgWide}>
          <input type={type} placeholder={placeholder} className="form-control"
                 onChange={props.handleChange.bind(this, name)}
                 value={props.inputValue || ''}
          />
        </div>
      </div>
  }
}

export default MyInput