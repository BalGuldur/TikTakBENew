import * as types from '../constants/main'

import { fetchData, fetchDataClean } from './helpers'

export function fetchEmployees() {
  return (dispatch) => {
    console.log ('fetch employees')

    fetchDataClean({
      url: '/employees/index',
      method: 'GET',
      success: (data) => {
        console.log('success fetch employees')
        dispatch({type: types.SET_EMPLOYEES, data})
      },
      errors: (data) => {
        console.log('error fetch employees')
      }
    })
  }
}
export function createEmployee(employee) {
  return (dispatch) => {
    let data = {auth_link: 'test'}
    console.log('create new employee')

    fetchDataClean({
      url: '/employees',
      method: 'POST',
      data: employee,
      success: (data) => {
        console.log('success create employee')
        dispatch({type: types.SET_AUTH_LINK, data})
      },
      errors: (data) => {
        console.log('error create employee')
      }
    })

  }
}