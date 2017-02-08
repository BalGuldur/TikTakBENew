import React, { Component } from 'react'

class StandartForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editedElement: this.props.element || {},
      buttonsIsDisable: '',
    }
  }

  handleChange = (key, e) => {
    let element = {}
    element[key] = e.target.value
    this.setState({editedElement: Object.assign({}, this.state.editedElement, element)})
    // this.setState({editedElement: element})
  }
  submitForm = () => {
    console.log('try create or edit element')
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
      {/*<_DepartmentForm handleChange={this.handleChange} {...this.state.editedElement}/>*/}
      {this.props.renderFormElements(this.handleChange, this.state.editedElement)}
      {this.renderButtons()}
    </form>
  render = () => {
    return <div className="row">
      {this.renderForm()}
    </div>
  }
}

export default StandartForm