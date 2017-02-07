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
export function deleteHall(hall) {
  return (dispatch) => {
    console.log('delete hall')
    console.log(hall)

    fetchDataClean({
      url: '/halls/'+hall.id,
      method: 'DELETE',
      success: (data) => {
        console.log('success delete hall')
        dispatch({type: types.DELETE_HALL, data})
      },
      errors: (data) => {
        console.log('error delete employee')
      }
    })
  }
}
export function editHall(hall) {
  return (dispatch) => {
    console.log('edit hall action')
    console.log(hall)

    fetchDataClean({
      url: '/halls/'+hall.id,
      method: 'PUT',
      data: hall,
      success: (data) => {
        console.log('success edit hall')
      },
      errors: (data) => {
        console.log('error edit hall')
      }
    })
  }
}

