import React, {Component} from 'react'
import ContentLayout from '../layouts/ContentLayout'
import ButtonPlank from '../layouts/ButtonPlank'
import MenuDepartment from './MenuDepartmentContainer'
import ButtonAdd from '../layouts/ButtonAdd'
import _DepartmentForm from './_DepartmentForm'
import StandartModalForm from '../base_elements/StandartModalForm'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      config_mode: this.props.route.config_mode,
      departmentModalIsOpen: false,
      activeDepartmentId: this.props.menu_departments && Object.keys(this.props.menu_departments)[0] || "",
    }
  }
  componentWillMount() {
    console.log('Menu will mount')
    this.props.fetchMenuDepartments()
  }
  componentDidMount() {
    this.props.initialUserSubscriptions()
  }
  componentWillUnmount() {
    this.props.cancelAllUserSubscriptions()
  }

  openModal = () => { this.setState({departmentModalIsOpen: true})}
  closeModal = () => { this.setState({departmentModalIsOpen: false})}
  handleSubmit = (department) => { this.props.createDepartment(department) }

  renderButtonAdd = () => {
    if (this.state.config_mode == "true") {
      return <ButtonAdd handleClick={this.openModal} />
    }
  }
  renderDepartmentForm = (handleChange, element) => {
    return <_DepartmentForm handleChange={handleChange} {...element}/>
  }
  renderDepartmentModal = () => {
    if (this.state.config_mode == "true") {
      return <StandartModalForm
        header="Создание Департмента"
        closeModal={this.closeModal}
        isOpen={this.state.departmentModalIsOpen}
        handleSubmit={this.handleSubmit}
        submitTitle="Создать"
        element={null}
        renderFormElements={this.renderDepartmentForm}
      />
    }
  }
  renderMenuDepartment = (key) =>
    <MenuDepartment
      key={key}
      handleClick={this.changeActiveDepartment}
      {...this.props.menu_departments[key]}
    />
  renderMenuDepartments = () =>
  // TODO: Проверить отображаение когда будут элементы может не хватает renderMenuDepartment()
    <div className="row">
      { this.renderDepartmentModal() }
      { Object.keys(this.props.menu_departments || []).map(this.renderMenuDepartment) }
      <div className="col-md-3 pull-right">
        {this.renderButtonAdd()}
      </div>
    </div>
  render = () => {
    return <div id="menu">
      <ContentLayout>
        <ButtonPlank>
          {this.renderMenuDepartments()}
        </ButtonPlank>
        <div>Test Menu</div>
      </ContentLayout>
    </div>
  }
}

export default Menu