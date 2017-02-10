import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/menu_categories';
import * as lib from '../../lib'
import _MenuCategoryForm from './_MenuCategoryForm'

import CollectionContainer from '../base_containers/CollectionContainer'


class MenuCategories extends Component {
  constructor(props) {
    super(props)
  }

  handleCreate = (element) => { console.log('createElement'); console.log(element) }//this.props.createMenuCategory(element) }
  handleDelete = (element) => { console.log('deleteElement'); }//this.props.deleteMenuCategory(element) }
  handleEdit = (element) => { console.log('deleteElement'); }//this.props.deleteMenuCategory(element) }

  createdCollection = () => { return {menu_department_id: this.props.menu_department_id}}
  categoryForm = (handleChange, element) => {
    return <_MenuCategoryForm handleChange={handleChange} element={element}/>
  }

  renderMenuCategory = (menuCategory) =>
    <div>
      TestMenuCategory {menuCategory.title}
    </div>
  render = () => {
    let menu_categories = lib.filterByKeysValues(
      this.props.menu_categories || {},
      {'menu_department_id': this.props.menu_department_id}
    ) || {}
    let newElement = {menu_department_id: this.props.menu_department_id}

    // collectionLayout={this.collectionLayout}
    return <div id="menu_categories">
      <CollectionContainer
        handleCreate={this.handleCreate}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        newElement={newElement}
        elementForm={this.categoryForm}
        elements={menu_categories}
        renderElement={this.renderMenuCategory}
      />
    </div>
  }
}

const mapStateToProps = (state) => ({menu_categories: state.menu_categories, menu_dep_to_menu_cat: state.menu_dep_to_menu_cat})

export default connect(mapStateToProps, actions)(MenuCategories)