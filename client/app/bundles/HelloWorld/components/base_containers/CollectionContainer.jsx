import React, { Component } from 'react'
import ButtonWithChild from '../base_containers/CRUD/ButtonWithChild'
import EditDelete from './CRUD/EditDelete'
import MyModal from './CRUD/MyModal'

// handleCreate - function - обработчик создания элемента
// handleEdit - function - обработчик создания элемента
// handleDelete - function - обработчик создания элемента
// newElement - новый элемент с default значениями

class CollectionContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newElement: this.props.newElement || {},
      editedElement: this.props.editedElement || "",
      editModalIsOpen: false,
    }
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({newElement: nextProps.newElement})
  }

  editModalOpen = () => { this.setState({editModalIsOpen: true}) }
  editModalClose = () => { this.setState({editModalIsOpen: false}) }
  editModalSubmit = () => { console.log('modal submit'); console.log(this.state.editedElement) }

  handleEdit = (element) => {
    this.setState({editedElement: element})
    this.editModalOpen()
  }
  handleDelete = (element) => { console.log('delete element'); console.log(element)}
  handleCreate = () => {
    this.props.handleCreate(Object.assign({}, this.state.newElement))
    this.setState({newElement: this.props.newElement})
  }
  handleChangeElement = (key, e, varName) => {
    let element = {}
    element[key] = e.target.value
    this.setState({[varName]: Object.assign({}, this.state[varName], element)})
  }
  handleChangeNewElement = (key, e) => {
    this.handleChangeElement(key, e, "newElement")
  }
  handleChangeEditElement = (key, e) => {
    this.handleChangeElement(key, e, "editedElement")
  }

  renderElement = (key) => {
      console.log(this.props.elements)

      return <div key={key}>
        <ButtonWithChild
          childrenType="dropdown"
          buttonIcon="fa fa-cog"
          buttonStyle="btn btn-default btn-sm"
        >
          <EditDelete
            handleEdit={this.handleEdit.bind(this, this.props.elements[key])}
            handleDelete={this.handleDelete.bind(this, this.props.elements[key])}
          />
        </ButtonWithChild>
        {this.props.renderElement(this.props.elements[key])}
      </div>
  }
  render = () => {

    return <div>
      <ButtonWithChild
        childrenType="modal"
        modalHeader="Создать Элемент"
        modalSubmit={this.handleCreate}
        modalSubmitTitle="Создать"
      >
        {this.props.elementForm(this.handleChangeNewElement, this.state.newElement)}
      </ButtonWithChild>
      <MyModal
        isOpen={this.state.editModalIsOpen}
        header="Изменить Элемент"
        modalSubmit={this.editModalSubmit}
        modalClose={this.editModalClose}
      >
        {this.props.elementForm(this.handleChangeEditElement, this.state.editedElement)}
      </MyModal>
      {Object.keys(this.props.elements || {}).map(this.renderElement)}
    </div>
  }
}

export default CollectionContainer