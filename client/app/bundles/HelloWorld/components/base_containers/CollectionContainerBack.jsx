import React, { Component } from 'react'
import ButtonAdd from '../layouts/ButtonAdd'
import StandartModalForm from '../base_elements/StandartModalForm'
import {CRUDMenu} from '../base_containers/CRUD'
import AddButton from '../base_containers/CRUD/AddButtonWithForm'

class CollectionContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalCreateIsOpen: false, //this.props.modalIsOpen || false,
      modalEditIsOpen: false,
      editedElement: {},
    }
  }

  openCreateModal = () => { this.setState({modalCreateIsOpen: true}) }
  closeCreateModal = () => { this.setState({modalCreateIsOpen: false}) }
  changeModal = () => { this.setState({modalCreateIsOpen: !this.state.modalCreateIsOpen}) }
  deleteEvent = (element) => { this.props.handleDelete(element) }
  editEvent = (element) => {
    console.log('edit')
    console.log(element)
    this.setState({editedElement})
  }

  renderButtonAdd = () => {
    if (this.props.config_mode == "true") {
      return <div className="row pull-left">
        <AddButton handleClick={this.openCreateModal} />
      </div>
    }
  }
  renderCreateModal = () => {
    if (this.props.config_mode == "true") {
      return <StandartModalForm
        header={this.props.titleNewForm || "Создание"}
        closeModal={this.closeCreateModal}
        isOpen={this.state.modalCreateIsOpen}
        handleSubmit={this.props.handleCreate}
        submitTitle="Создать"
        element={this.props.createdElement()}
        renderFormElements={this.props.elementForm}
      />
    } else { return "" }
  }
  renderEditDelete = (key) => {
    // if (this.props.config_mode == "true") {
    //   return <CRUDMenu deleteEvent={this.deleteEvent} editEvent={this.editEvent} element={this.props.elements[key]} />
    // } else { return ""}
  }
  renderElement = (key) =>
    <div key={key}>
      {this.props.elementRender(this.props.elements[key], this.renderEditDelete.bind(this, key))}
    </div>
  renderCollection = () => {
    return <div className="row">
      Test renderCollection
      {this.renderCreateModal()}
      {this.renderButtonAdd()}
      {Object.keys(this.props.elements).map(this.renderElement)}
    </div>
  }
  render = () => {

    return <div>
      { this.props.collectionLayout && this.props.collectionLayout(
        this.renderCollection()
      ) || this.renderCollection()}
    </div>
  }
}

export default CollectionContainer