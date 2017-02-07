import React from 'react'
import MyInput from '../base_elements/MyInput'

const PlaceForm = (props) =>
  <div>
    <MyInput
      inputName="title"
      inputValue={props.title}
      handleChange={props.handleChange}
      placeholder="Название"
    />
    <MyInput
      inputName="capacity"
      inputValue={props.capacity}
      inputType="number"
      handleChange={props.handleChange}
      placeholder="вместимость"
      />
  </div>

export default PlaceForm