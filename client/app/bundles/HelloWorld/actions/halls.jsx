import * as types from '../constants/main'

import { fetchData, fetchDataClean } from './helpers'

export function fetchHalls() {
  return (dispatch) => {
    console.log ('fetch halls')

    fetchDataClean({
      url: '/halls/index',
      method: 'GET',
      success: (data) => {
        console.log('success fetch halls')
        dispatch({type: types.SET_HALLS, data})
      },
      errors: (data) => {
        console.log('error fetch halls')
      }
    })
  }
}