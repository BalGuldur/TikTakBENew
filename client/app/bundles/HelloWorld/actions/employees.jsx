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