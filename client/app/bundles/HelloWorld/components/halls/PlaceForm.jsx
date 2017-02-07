import React, { Component } from 'react'
import _PlaceForm from './_PlaceForm'

class PlaceForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editedElement: this.props.element || {},
      buttonsIsDisable: '',
    }
  }

  handleChange = (key, e) => {
    let element = this.state.editedElement
    element[key] = e.target.value
    this.setState({editedElement: element})
  }
  submitForm = () => {
    console.log('try create element')
    this.setState({buttonsIsDisable: 'disabled'})
    this.props.handleSubmit(this.state.editedElement)
    this.setState({buttonsIsDisable: ''})
    this.props.closeModal()
  }

  renderButtons = () =>
    <div className="ibox-content">
      <div className="form-group pull-right">
        <button className={"btn btn-default "+this.state.buttonsIsDisable} type="button" onClick={this.props.closeModal}>Отменить</button>
        <button className={"btn btn-primary "+this.state.buttonsIsDisable} type="button" onClick={this.submitForm}>{this.props.submitButtonTitle}</button>
      </div>
    </div>
  renderForm = () =>
    <form className="form-horizontal">
      <_PlaceForm handleChange={this.handleChange} {...this.state.editedElement}/>
      {this.renderButtons()}
    </form>
  render = () => {
    return <div className="row">
      {this.renderForm()}
    </div>
  }
}

export default PlaceForm