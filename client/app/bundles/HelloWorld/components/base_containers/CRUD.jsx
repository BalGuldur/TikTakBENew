import React, { Component } from 'react'
import DropDownEditDelete from '../layouts/DropDownEditDelete'
import StandartModalForm from '../base_elements/StandartModalForm'

class EditForm extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return <div>
      <StandartModalForm
        header={this.props.titleNewForm || "Создание"}
        closeModal={this.closeModal}
        isOpen={this.props.isOpen}
        handleSubmit={this.props.handleSubmit}
        submitTitle="Создать"
        element={this.props.element()}
        renderFormElements={this.props.elementForm}
      />
    </div>
  }
}
class CRUDMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editModalIsOpen: false,
    }
  }

  openModal = () => { this.setState({editModalIsOpen: true}) }
  closeModal = () => { this.setState({editModalIsOpen: false}) }

  configClick = (eventName) => {
    switch (eventName) {
      case 'delete':
        this.props.deleteEvent(this.props.element)
        break
      case 'edit':
        this.openModal()
        break
      case 'submitEdit':
        console.log('submitEdit')
        break
      // this.openModal()
    }
  }

  render = () => {
    return <div className="inline">
      <DropDownEditDelete handleClick={this.configClick} >
        <EditForm
          isOpen={this.state.editModalIsOpen}
          closeModal={this.closeModal}
          handleSubmit={this.configClick.bind(this, 'submitEdit')}
          element={this.props.element}
          renderFormElements={this.props.elementForm}
        />
      </DropDownEditDelete>
    </div>
  }
}

export { CRUDMenu, EditForm }