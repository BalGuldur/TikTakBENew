import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/menu_categories';
import * as lib from '../../lib'
import _MenuCategoryForm from './_MenuCategoryForm'
import IBox from '../layouts/IBox'
import CollectionContainer from '../base_containers/CollectionContainer'
import MenuItems from './MenuItemsContainer'


class MenuCategories extends Component {
  constructor(props) {
    super(props)
  }


  handleCreate = (element) => { console.log('createElement'); console.log(element); this.props.createMenuCategory(element) }
  handleDelete = (element) => { console.log('deleteElement'); this.props.deleteMenuCategory(element) }
  handleEdit = (element) => { console.log('deleteElement'); this.props.editMenuCategory(element) }

  categoryForm = (handleChange, element) => {
    return <_MenuCategoryForm handleChange={handleChange} element={element}/>
  }
  renderMenuCategory = (menuCategory, CRUD) => {
    let title = () => {
      return <div>
        <div className="inline">{menuCategory.title}</div>
        <div className="inline"> {CRUD(menuCategory)}</div>
      </div>
    }

    return <IBox
      collapsAble="true"
      collapsed="true"
      title={title()}
    >
      <MenuItems menu_category_id={menuCategory.id} config_mode="true"/>
    </IBox>
  }
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
        config_mode={this.props.config_mode}
      />
    </div>
  }
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps, actions)(MenuCategories)