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
export function createHall(hall) {
  return (dispatch) => {
    console.log('create new hall')

    fetchDataClean({
      url: '/halls',
      method: 'POST',
      data: hall,
      success: (data) => {
        console.log('success create hall')
        dispatch({type: types.ADD_HALL, data})
      },
      errors: (data) => {
        console.log('error create employee')
      }
    })
  }
}
