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
    console.log('create new employee')

    fetchDataClean({
      url: '/employees',
      method: 'POST',
      data: employee,
      success: (data) => {
        console.log('success create employee')
        dispatch({type: types.SET_AUTH_LINK, auth_link: data.auth_link})
        dispatch({type: types.ADD_EMPLOYEE, employee: data.employee})
      },
      errors: (data) => {
        console.log('error create employee')
      }
    })
  }
}
export function deleteEmployee(employee) {
  return (dispatch) => {
    console.log('delete employee')
    console.log(employee)

    fetchDataClean({
      url: '/employees/'+employee.id,
      method: 'DELETE',
      success: (data) => {
        console.log('success delete employee')
        dispatch({type: types.DELETE_EMPLOYEE, employee: data})
      },
      errors: (data) => {
        console.log('error delete employee')
      }
    })
  }
}