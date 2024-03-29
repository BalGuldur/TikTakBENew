import React, { Component } from 'react'
import HallForm from './_HallForm'

class CreateHallForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newHall: {},
      buttonsIsDisable: '',
    }
  }
  componentWillUnmount() {
    this.setState({newHall: {}})
  }

  handleChange = (key, e) => {
    let hall = this.state.newHall
    hall[key] = e.target.value
    this.setState({newHall: hall})
  }
  submitForm = () => {
    console.log('try create hall')
    this.setState({buttonsIsDisable: 'disabled'})
    this.props.createHall(this.state.newHall)
    this.setState({buttonsIsDisable: ''})
    this.props.closeModal()
  }

  renderButtons = () =>
    <div className="ibox-content">
      <div className="form-group pull-right">
        <button className={"btn btn-default "+this.state.buttonsIsDisable} type="button" onClick={this.props.closeModal}>Отменить</button>
        <button className={"btn btn-primary "+this.state.buttonsIsDisable} type="button" onClick={this.submitForm}>Создать</button>
      </div>
    </div>
  renderForm = () =>
    <form className="form-horizontal">
      <HallForm handleChange={this.handleChange} {...this.state.newHall}/>
      {this.renderButtons()}
    </form>
  render = () => {
    return <div className="row">
      {this.renderForm()}
    </div>
  }
}

export default CreateHallForm