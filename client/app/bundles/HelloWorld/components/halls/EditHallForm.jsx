import React, { Component } from 'react'
import HallForm from './_HallForm'

class EditHallForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editedHall: this.props.hall,
      buttonsIsDisable: '',
    }
  }

  handleChange = (key, e) => {
    let hall = this.state.editedHall
    hall[key] = e.target.value
    this.setState({editedHall: hall})
  }
  submitForm = () => {
    console.log('try create hall')
    this.setState({buttonsIsDisable: 'disabled'})
    this.props.editHall(this.state.editedHall)
    this.setState({buttonsIsDisable: ''})
    this.props.closeModal()
  }

  renderButtons = () =>
    <div className="ibox-content">
      <div className="form-group pull-right">
        <button className={"btn btn-default "+this.state.buttonsIsDisable} type="button" onClick={this.props.closeModal}>Отменить</button>
        <button className={"btn btn-primary "+this.state.buttonsIsDisable} type="button" onClick={this.submitForm}>Изменить</button>
      </div>
    </div>
  renderForm = () =>
    <form className="form-horizontal">
      <HallForm handleChange={this.handleChange} {...this.state.editedHall}/>
      {this.renderButtons()}
    </form>
  render = () => {
    return <div className="row">
      {this.renderForm()}
    </div>
  }
}

export default EditHallForm