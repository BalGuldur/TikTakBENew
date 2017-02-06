import * as types from '../constants/main'

import { fetchData, fetchDataClean } from './helpers'

export function fetchEmployees() {
  return (dispatch) => {
    console.log ('fetch employees')

    fetchDataClean({
      url: '/employees',
      method: 'GET',
      success: (data) => {
        console.log('success fetch employees')
      },
      errors: (data) => {
        console.log('error fetch employees')
      }
    })
  }
}