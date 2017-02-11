import React, { Component } from 'react'
import MyModal from './MyModal'

// buttonTitle - text - Надпись после кнопки
// buttonIcon - text - "fa fa-plus" - иконка кнопки
// buttonStyle - text - 'btn btn-default" - полный стиль кнопки
// childrenType - text - 'modal' or 'hidden_style' - тип содержимого
// если type modal можно задать
// modalHeader - text -заголовк модалки
// modalSubmit - function - обработчик подтверждения модалки
// modalSubmitTitle - text - надпись на кнопке модалки

// children - содержимое внутри hidden_style или modal
class ButtonWithChild extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
    }
  }

  changeOpen = () => {this.setState({modalIsOpen: !this.state.modalIsOpen})}
  modalClose = () => {this.setState({modalIsOpen: false})}

  displayForm = () => {
    if(this.state.modalIsOpen) {
      return {}
    } else {
      return {display: "none"}
    }
  }
  insertClassOpen = () => {
    if(this.state.modalIsOpen) {
      return " open"
    } else {
      return ""
    }
  }

  renderModal = () => {
    return <MyModal
      isOpen={this.state.modalIsOpen}
      header={this.props.modalHeader}
      modalSubmit={this.props.modalSubmit}
      modalClose={this.modalClose}
      modalSubmitTitle={this.props.modalSubmitTitle}
      modalHeader={this.props.modalHeader}
    >
      {this.props.children}
    </MyModal>
  }
  renderModalOrForm = () => {
    let type = this.props.childrenType || ""
    switch (type) {
      case "modal":
        return <div>{this.renderModal()}</div>;
        break;
      case "dropdown":
        return <div className={"dropdown" + this.insertClassOpen()} onClick={this.changeOpen}>
          <ul className="dropdown-menu animated fadeInRight m-t-xs">
            {this.props.children}
          </ul>
        </div>
        break
      default: // include "form", "hidden_style"
        return <div style={this.displayForm()}>
          {this.props.children}
        </div>;
        break
    }
  }
  render = () => {
    let buttonTitle = this.props.buttonTitle || "";
    let buttonIcon = this.props.buttonIcon || "fa fa-plus"
    let buttonStyle = this.props.buttonStyle || "btn btn-default"

    return <div cassName="inline">
      <div>
        <button className={buttonStyle} onClick={this.changeOpen}>
          <i className={buttonIcon}>{buttonTitle}</i>
        </button>
      </div>
      <div>
        {this.renderModalOrForm()}
      </div>
    </div>
  }
}

export default ButtonWithChild