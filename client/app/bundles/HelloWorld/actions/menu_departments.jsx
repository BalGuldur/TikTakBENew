import * as types from '../constants/main'

import { fetchData, fetchDataClean } from './helpers'

export function fetchMenuDepartments() {
  return (dispatch) => {
    console.log ('fetch menu_departments')

    fetchDataClean({
      url: '/menu_departments/index',
      method: 'GET',
      success: (data) => {
        console.log('success fetch menu_departments')
        dispatch({type: types.SET_MENU_DEPARTMENTS, menu_departments: data.menu_departments})
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