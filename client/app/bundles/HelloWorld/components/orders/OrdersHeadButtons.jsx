import React from 'react'
import MyButton from '../base_elements/MyButton'
import { browserHistory } from 'react-router'

const OrdersHeadButtons = (props) => {
  return <div>
    <MyButton
      handleClick={() => {browserHistory.goBack()}}
    >Назад
    </MyButton>
    <MyButton
      handleClick={() => {}}
    >Добавить заказ
    </MyButton>
    <MyButton
      handleClick={() => {}}
    >Разбить чеки
    </MyButton>
  </div>
}

export default OrdersHeadButtons