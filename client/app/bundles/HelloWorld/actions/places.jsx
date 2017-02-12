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
export function createPlace(place) {
  return (dispatch) => {
    console.log('create new place')

    fetchDataClean({
      url: '/places',
      method: 'POST',
      data: place,
      success: (data) => {
        console.log('success create place')
        dispatch({type: types.ADD_PLACE, data})
      },
      errors: (data) => {
        console.log('error create employee')
      }
    })
  }
}
export function deletePlace(place) {
  return (dispatch) => {
    console.log('delete place')
    console.log(place)

    fetchDataClean({
      url: '/places/'+place.id,
      method: 'DELETE',
      success: (data) => {
        console.log('success delete place')
        dispatch({type: types.DELETE_PLACE, data})
      },
      errors: (data) => {
        console.log('error delete employee')
      }
    })
  }
}
export function editPlace(place) {
  return (dispatch) => {
    console.log('edit place action')
    console.log(place)

    fetchDataClean({
      url: '/places/'+place.id,
      method: 'PUT',
      data: place,
      success: (data) => {
        console.log('success edit place')
        dispatch({type: types.EDIT_PLACE, data})
      },
      errors: (data) => {
        console.log('error edit place')
      }
    })
  }
}
export function clickPlace(place) {
  return (dispatch, getState) => {
    let { choosed_places } = getState()
    console.log('click place')
    if (~choosed_places.indexOf(place.id))
      dispatch({type: types.UNCHOOSE_PLACE, place})
    else
      dispatch({type: types.CHOOSE_PLACE, place})
  }
}

