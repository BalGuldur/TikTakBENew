import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/menu_items';
import * as lib from '../../lib'
import _MenuItemForm from './_MenuItemForm'
// import IBox from '../layouts/IBox'
import CollectionContainer from '../base_containers/CollectionContainer'


class MenuItems extends Component {
  constructor(props) {
    super(props)
  }

  handleCreate = (element) => { console.log('createElement'); console.log(element); this.props.createMenuItem(element) }
  handleDelete = (element) => { console.log('deleteElement'); this.props.deleteMenuItem(element) }
  handleEdit = (element) => { console.log('deleteElement'); this.props.editMenuItem(element) }

  menuItemForm = (handleChange, element) => {
    return <_MenuItemForm handleChange={handleChange} element={element}/>
  }
  renderMenuItem = (menuItem, CRUD) =>
    <div>
      <div className="inline">{menuItem.title}</div>
      <div className="inline">{menuItem.price}</div>
      <div className="inline">
        {CRUD(menuItem)}
      </div>
    </div>
  render = () => {
    let menu_items = lib.filterByKeysValues(
      this.props.menu_items || {},
      {'menu_category_id': this.props.menu_category_id}
    ) || {}
    let newElement = {menu_category_id: this.props.menu_category_id}

    // collectionLayout={this.collectionLayout}
    return <div id="menu_items">
          <CollectionContainer
            handleCreate={this.handleCreate}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            newElement={newElement}
            elementForm={this.menuItemForm}
            elements={menu_items}
            renderElement={this.renderMenuItem}
          />
    </div>
  }
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps, actions)(MenuItems)