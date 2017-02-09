import React from 'react'
import MyInput from '../base_elements/MyInput'

const _MenuCategoryForm = (props) =>
  <div>
    <MyInput
      inputName="title"
      inputValue={props.title}
      handleChange={props.handleChange}
      placeholder="Название"
    />
  </div>

export default _MenuCategoryForm