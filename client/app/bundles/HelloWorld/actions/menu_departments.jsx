import * as types from '../constants/main'
import {fetchMenuCategories} from './menu_categories'
import {fetchMenuItems} from './menu_items'

import { fetchData, fetchDataClean } from './helpers'

export function fetchMenuDepartmentsWithNested() {
  return (dispatch) => {
    dispatch(fetchMenuDepartments())

  }
}
export function fetchMenuDepartments() {
  return (dispatch) => {
    console.log ('fetch menu_departments')

    fetchDataClean({
      url: '/menu_departments/index',
      method: 'GET',
      success: (data) => {
        console.log('success fetch menu_departments')
        dispatch({
          type: types.SET_MENU_DEPARTMENTS,
          menu_departments: data.menu_departments,
          menu_dep_to_menu_cat: data.menu_dep_to_menu_cat,
        })
        // dispatch({type: types.SET_HALLS_TO_PLACES, halls_to_places: data.halls_to_places})
      },
      errors: (data) => {
        console.log('error fetch menu_departments')
      }
    })
  }
}
export function createDepartment(department) {
  return (dispatch) => {
    console.log('create new department')

    fetchDataClean({
      url: '/menu_departments',
      method: 'POST',
      data: department,
      success: (data) => {
        console.log('success create department')
        dispatch({type: types.ADD_MENU_DEPARTMENT, data})
      },
      errors: (data) => {
        console.log('error create department')
      }
    })
  }
}
export function deleteDepartment(department) {
  return (dispatch) => {
    console.log('delete department')
    console.log(department)

    fetchDataClean({
      url: '/menu_departments/'+department.id,
      method: 'DELETE',
      success: (data) => {
        console.log('success delete department')
        dispatch({type: types.DELETE_MENU_DEPARTMENT, data})
      },
      errors: (data) => {
        console.log('error delete employee')
      }
    })
  }
}
export function editDepartment(department) {
  return (dispatch) => {
    console.log('edit department action')
    console.log(department)

    fetchDataClean({
      url: '/menu_departments/'+department.id,
      method: 'PUT',
      data: department,
      success: (data) => {
        console.log('success edit department')
        dispatch({type: types.EDIT_MENU_DEPARTMENT, data})
      },
      errors: (data) => {
        console.log('error edit department')
      }
    })
  }
}