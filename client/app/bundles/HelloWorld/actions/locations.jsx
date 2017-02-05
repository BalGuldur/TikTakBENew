import * as types from '../constants/main'
import { browserHistory } from 'react-router'

import { fetchData, fetchDataClean } from './helpers'

export function chooseLocation(location) {
  return (dispatch) => {
    dispatch({type: types.CHOOSE_LOCATION, location})
    console.log('after choose location')
    browserHistory.push('/')
  }
}
export const removeLocation = (location) => ({
  type: types.REMOVE_LOCATION,
  location,
})
export const addLocation = (location) => ({
  type: types.ADD_LOCATION,
  location,
})
export function deleteLocation(location) {
  return (dispatch) => {
    console.log('delete location id: ' + location.id)

    fetchDataClean({
      url: '/locations/'+location.id,
      method: 'DELETE',
      success: (data) => {
        console.log('success delete location' + data)
      },
      errors: (data) => {
        console.log('error delete location' + data)
      }
    })
  }
}
export function createLocation(title) {
  return (dispatch) => {
    console.log('start test')

    fetchDataClean({
      url: '/locations',
      method: 'POST',
      data: {title: title},
      success: (data) => {
        console.log('success add location response is' + data)
      },
      errors: (data) => {
        console.log('error add location response is' + data)
      }
    })
  }
}