import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/menu_departments';
import ContentLayout from '../layouts/ContentLayout'
import * as lib from '../../lib'
import _MenuCategoryForm from './_MenuCategoryForm'
import StandartModalForm from '../base_elements/StandartModalForm'
import ButtonAdd from '../layouts/ButtonAdd'


class MenuCategories extends Component {
  constructor(props) {
    super(props)

    this.state = {
    //   config_mode: this.props.route.config_mode,
      categoryModalIsOpen: false,
      // TODO: change config_mode!
      config_mode: "true",
    //   activeCategoryId: this.props.menu_categories && Object.keys(this.props.menu_categories)[0] || "",
    }
  }

  openModal = () => { this.setState({categoryModalIsOpen: true})}
  closeModal = () => { this.setState({categoryModalIsOpen: false})}
  handleSubmit = (menu_category) => { this.props.createMenuCategory(menu_category) }
  // changeActiveMenuCategory = () => {console.log('change menu category')}

  renderButtonAdd = () => {
    if (this.state.config_mode == "true") {
      return <ButtonAdd handleClick={this.openModal} />
    }
  }
  renderMenuCategoryForm = (handleChange, element) => {
    return <_MenuCategoryForm handleChange={handleChange} {...element}/>
  }
  renderMenuCategoryModal = () => {
    if (this.state.config_mode == "true") {
      return <StandartModalForm
        header="Создание Категории"
        closeModal={this.closeModal}
        isOpen={this.state.categoryModalIsOpen}
        handleSubmit={this.handleSubmit}
        submitTitle="Создать"
        element={null}
        renderFormElements={this.renderMenuCategoryForm}
      />
    }
  }
  renderMenuCategory = (key) =>
    <div key={key}>
      TestMenuCategory
    </div>
  //   <MenuDepartment
  //     key={key}
  //     handleClick={this.changeActiveMenuCategory}
  //     config_mode={this.state.config_mode}
  //     department={this.props.menu_categories[key]}
  //   />
  renderMenuCategories = (menu_categories) => {
    //   // TODO: Проверить отображаение когда будут элементы может не хватает renderMenuCategory()
    console.log(menu_categories)

    return <div className="row">
      { this.renderMenuCategoryModal() }
      <div className="col-md-3 pull-right">
        {this.renderButtonAdd()}
      </div>
      {Object.keys(menu_categories).map(this.renderMenuCategory)}
    </div>
  }
  //     { this.renderMenuCategoryModal() }
  //     { Object.keys(this.props.menu_categories || []).map(this.renderMenuCategory) }
  //     <div className="col-md-3 pull-right">
  //       {this.renderButtonAdd()}
  //     </div>
  //   </div>
  render = () => {
    let menu_categories = lib.filterByKeysValues(
      this.props.menu_categories || {},
      {'menu_department_id': this.props.menu_department_id}
    ) || {}
    console.log(menu_categories)

    return <div id="menu">
      <ContentLayout>
        {/*<ButtonPlank>*/}
          {this.renderMenuCategories(menu_categories)}
        {/*</ButtonPlank>*/}
        {/*<div>Test Menu</div>*/}
        <div>current menu department {this.props.menu_department_id}</div>
      </ContentLayout>
    </div>
  }
}

const mapStateToProps = (state) => ({menu_categories: state.menu_categories})

export default connect(mapStateToProps, actions)(MenuCategories)