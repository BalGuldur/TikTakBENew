import React from 'react'
import MyInput from '../base_elements/MyInput'

const HallForm = (props) =>
  <div>
    <MyInput
      inputName="title"
      inputValue={props.title}
      handleChange={props.handleChange}
      placeholder="Название"
    />
  </div>

export default HallForm