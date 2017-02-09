import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/menu_departments';
import ContentLayout from '../layouts/ContentLayout'

class MenuCategories extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   config_mode: this.props.route.config_mode,
    //   categoryModalIsOpen: false,
    //   activeCategoryId: this.props.menu_categories && Object.keys(this.props.menu_categories)[0] || "",
    // }
  }

  // openModal = () => { this.setState({categoryModalIsOpen: true})}
  // closeModal = () => { this.setState({categoryModalIsOpen: false})}
  // handleSubmit = (menu_category) => { this.props.createMenuCategory(menu_category) }
  // changeActiveMenuCategory = () => {console.log('change menu category')}

  // renderButtonAdd = () => {
  //   if (this.state.config_mode == "true") {
  //     return <ButtonAdd handleClick={this.openModal} />
  //   }
  // }
  // renderMenuCategoryForm = (handleChange, element) => {
  //   return <_DepartmentForm handleChange={handleChange} {...element}/>
  // }
  // renderMenuCategoryModal = () => {
  //   if (this.state.config_mode == "true") {
  //     return <StandartModalForm
  //       header="Создание Департмента"
  //       closeModal={this.closeModal}
  //       isOpen={this.state.categoryModalIsOpen}
  //       handleSubmit={this.handleSubmit}
  //       submitTitle="Создать"
  //       element={null}
  //       renderFormElements={this.renderMenuCategoryForm}
  //     />
  //   }
  // }
  // renderMenuCategory = (key) =>
  //   <MenuDepartment
  //     key={key}
  //     handleClick={this.changeActiveMenuCategory}
  //     config_mode={this.state.config_mode}
  //     department={this.props.menu_categories[key]}
  //   />
  // renderMenuCategories = () =>
  //   // TODO: Проверить отображаение когда будут элементы может не хватает renderMenuCategory()
  //   <div className="row">
  //     { this.renderMenuCategoryModal() }
  //     { Object.keys(this.props.menu_categories || []).map(this.renderMenuCategory) }
  //     <div className="col-md-3 pull-right">
  //       {this.renderButtonAdd()}
  //     </div>
  //   </div>
  render = () => {
    // let menu_categories = this.props.menu_categories

    return <div id="menu">
      <ContentLayout>
        {/*<ButtonPlank>*/}
          {/*{this.renderMenuCategories()}*/}
        {/*</ButtonPlank>*/}
        {/*<div>Test Menu</div>*/}
        <div>Test Menu Category</div>
        <div>current menu department {this.props.menu_department_id}</div>
      </ContentLayout>
    </div>
  }
}

const mapStateToProps = (state) => ({menu_categories: state.menu_categories})

export default connect(mapStateToProps, actions)(MenuCategories)