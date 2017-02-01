import React, { Component } from 'react'
import AddLocationForm from './AddLocationForm'
import AddButtonWithForm from '../base_elements/AddButtonWithForm'

class AddLocation extends Component {
  constructor(props) {
    super(props)
  }

  render = () =>
    <div className="col-lg-4">
      <AddButtonWithForm>
        <AddLocationForm actions={this.props.actions}/>
      </AddButtonWithForm>
    </div>
}

export default AddLocation