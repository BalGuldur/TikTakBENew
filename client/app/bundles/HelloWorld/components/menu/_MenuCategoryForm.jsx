import React, { Component } from 'react'
import MyInput from '../base_elements/MyInput'

class _MenuCategoryForm extends Component {
  constructor(props) {
    super(props)
  }

  render = () =>
    <div>
      <MyInput
        inputName="title"
        inputValue={this.props.element.title}
        handleChange={this.props.handleChange}
        placeholder="Название"
      />
    </div>
}

export default _MenuCategoryForm