import React, { Component } from 'react'
import AddLocationForm from './AddLocationForm'
import AddButtonWithForm from '../base_elements/AddButtonWithForm'

class AddLocation extends Component {
  constructor(props) {
    super(props)

    this.state = {openForm: false}
  }

  closeForm = () =>
    this.setState({openForm: false})

  changeOpenForm = () =>
    this.setState({openForm: !this.state.openForm})

  render = () =>
    <div className="col-lg-4">
      <AddButtonWithForm open={this.state.openForm} changeOpen={this.changeOpenForm}>
        <AddLocationForm {...this.props} closeForm={this.closeForm} />
      </AddButtonWithForm>
    </div>
}

export default AddLocation