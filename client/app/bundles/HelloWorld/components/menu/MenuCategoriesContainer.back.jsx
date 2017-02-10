import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/menu_categories';
import ContentLayout from '../layouts/ContentLayout'
import IBox from '../layouts/IBox'
import * as lib from '../../lib'
import _MenuCategoryForm from './_MenuCategoryForm'
import StandartModalForm from '../base_elements/StandartModalForm'
import ButtonAdd from '../layouts/ButtonAdd'
import CollectionContainer from '../base_containers/CollectionContainer'


class MenuCategories extends Component {
  constructor(props) {
    super(props)

    this.state = {
    //   config_mode: this.props.route.config_mode,
      categoryModalIsOpen: false,
      // // TODO: change config_mode!
      // config_mode: "true",
    //   activeCategoryId: this.props.menu_categories && Object.keys(this.props.menu_categories)[0] || "",
    }
  }

  handleCreate = (element) => { console.log('createElement'); this.props.createMenuCategory(element) }
  handleDelete = (element) => { console.log('deleteElement'); this.props.deleteMenuCategory(element) }

  createdCollection = () => { return {menu_department_id: this.props.menu_department_id}}
  categoryForm = (handleChange, element) => {
    return <_MenuCategoryForm handleChange={handleChange} {...element}/>
  }

  renderMenuCatWithCrud = (title, CRUDRender) =>
    <div>
        <p className="inline">{title}</p>
        {CRUDRender()}
      </div>
  // renderMenuCategory = (menuCategory, CRUDRender) =>
  //   <div>
  //     <IBox title={this.renderMenuCatWithCrud(menuCategory.title, CRUDRender)} collapsAble="true">
  //       Тут будут позиции меню
  //     </IBox>
  //   </div>
  // collectionLayout = (children) =>
  //     <IBox>
  //       {children}
  //     </IBox>
  render = () => {
    let menu_categories = lib.filterByKeysValues(
      this.props.menu_categories || {},
      {'menu_department_id': this.props.menu_department_id}
    ) || {}
    console.log(menu_categories)

    // collectionLayout={this.collectionLayout}
    return <div id="menu_categories">
      <CollectionContainer
        elementForm={this.categoryForm}
        titleNewForm="Создание Категории"
        handleCreate={this.handleCreate}
        handleDelete={this.handleDelete}
        config_mode="true"
        elements={menu_categories}
        elementRender={this.renderMenuCategory}
        createdElement={this.createdCollection}
      />
    </div>
  }
}

const mapStateToProps = (state) => ({menu_categories: state.menu_categories, menu_dep_to_menu_cat: state.menu_dep_to_menu_cat})

export default connect(mapStateToProps, actions)(MenuCategories)