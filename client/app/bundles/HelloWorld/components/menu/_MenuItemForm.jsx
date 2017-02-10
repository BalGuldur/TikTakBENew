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
      <MyInput
        inputName="price"
        inputType="number"
        inputValue={this.props.element.price}
        handleChange={this.props.handleChange}
        placeholder="Цена"
      />
    </div>
}

export default _MenuCategoryForm