import * as types from '../constants/main'

import { fetchData, fetchDataClean } from './helpers'

export function fetchPlaces() {
  return (dispatch) => {
    console.log ('fetch places')

    fetchDataClean({
      url: '/places/index',
      method: 'GET',
      success: (data) => {
        console.log('success fetch places')
        dispatch({type: types.SET_PLACES, data})
      },
      errors: (data) => {
        console.log('error fetch places')
      }
    })
  }
}