import React from 'react'
import MyInput from '../base_elements/MyInput'

const OpenPlaceForm = (props) => {
  // console.log('props')
  // console.log(props)
  let element = props.element || {}

  return <div>
    <MyInput
      inputName="qty_people"
      inputValue={element.qty_people || ""}
      inputType="number"
      handleChange={props.handleChange}
      placeholder="Кол-во человек"
    />
    <MyInput
      inputName="fullname"
      inputValue={element.fullname || ""}
      inputType="text"
      handleChange={props.handleChange}
      placeholder="ФИО Клиента"
    />
    <MyInput
      inputName="phone"
      inputValue={element.phone || ""}
      inputType="phone"
      handleChange={props.handleChange}
      placeholder="Телефон"
    />
  </div>
}

export default OpenPlaceForm