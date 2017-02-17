import React, { Component } from 'react'
import OrdersHeadButtons from './OrdersHeadButtons'

class Orders extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return <div>
      <OrdersHeadButtons/>
      Test Orders
    </div>
  }
}

export default Orders