import React, {Component} from 'react'
import ContentLayout from '../layouts/ContentLayout'
import ButtonPlank from '../layouts/ButtonPlank'
import MenuDepartment from './MenuDepartment'
import ButtonAdd from '../layouts/ButtonAdd'
import MyModal from '../base_elements/MyModal'
import DepartmentForm from './DepartmentForm'
import _DepartmentForm from './_DepartmentForm'
import StandartModalForm from '../base_elements/StandartModalForm'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      departmentModalIsOpen: false,
      activeDepartmentId: this.props.menu_departments && Object.keys(this.props.menu_departments)[0] || ""
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
  handleSubmit = () => { console.log('handleSubmit')}

  renderButtonAdd = () => <i className="fa fa-plus fa-2x pull-right"></i>
  renderDepartmentForm = (handleChange, element) => {
    return <_DepartmentForm handleChange={handleChange} {...element}/>
  }
  renderDepartmentModal = () =>
    <StandartModalForm
      header="Создание Департмента"
      closeModal={this.closeModal}
      isOpen={this.state.departmentModalIsOpen}
      handleSubmit={this.handleSubmit}
      submitTitle="Создать"
      element={null}
      renderFormElements={this.renderDepartmentForm}
    />
  renderMenuDepartment = (key) =>
    <div className="col-md-3">
      <MenuDepartment
        key={key}
        handleClick={this.changeActiveDepartment}
        menuDepartment={this.props.menu_departments[key]}
      />
    </div>
  renderMenuDepartments = () =>
  // TODO: Проверить отображаение когда будут элементы может не хватает renderMenuDepartment()
    <div className="row">
      { this.renderDepartmentModal() }
      { Object.keys(this.props.menu_departments || []).map(this.renderMenuDepartment) }
      <div className="col-md-3 pull-right">
        <ButtonAdd handleClick={this.openModal} />
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