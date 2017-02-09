import React, {Component} from 'react'
import DropDownEditDelete from '../layouts/DropDownEditDelete'
import StandartModalForm from '../base_elements/StandartModalForm'
import _DepartmentForm from './_DepartmentForm'

class MenuDepartment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editModalIsOpen: false,
    }
  }

  closeModal = () => { this.setState({editModalIsOpen: false}) }
  openModal = () => { this.setState({editModalIsOpen: true}) }
  handleSubmit = (department) => { this.props.editDepartment(department) }

  configClick = (eventName) => {
    switch (eventName) {
      case 'delete':
        this.props.deleteDepartment(this.props.department)
      case 'edit':
        this.openModal()
    }
  }

  renderDepartmentForm = (handleChange, element) => {
    return <_DepartmentForm handleChange={handleChange} {...element}/>
  }
  renderConfig = () => {
    if (this.props.config_mode == "true") {
      return <DropDownEditDelete handleClick={this.configClick}>
        <StandartModalForm
          header="Редактирование Департмента"
          closeModal={this.closeModal}
          isOpen={this.state.editModalIsOpen}
          handleSubmit={this.handleSubmit}
          submitTitle="Изменить"
          element={this.props.department}
          renderFormElements={this.renderDepartmentForm}
        />
      </DropDownEditDelete>
    }
  }
  render = () => {
    return <div className="col-xs-2">
      <button
        className="btn btn-default inline"
        onClick={this.testLog}
      >
        {this.props.department.title}
      </button>
      {this.renderConfig()}
    </div>
  }
}

export default MenuDepartment