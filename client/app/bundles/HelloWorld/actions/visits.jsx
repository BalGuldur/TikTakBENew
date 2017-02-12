import * as types from '../constants/main'

import { fetchData, fetchDataClean } from './helpers'

export function fetchVisits() {
  return (dispatch) => {
    console.log ('fetch visits')

    fetchDataClean({
      url: '/visits/today',
      method: 'GET',
      success: (data) => {
        console.log('success fetch visits')
        dispatch({type: types.SET_VISITS, visits: data.visits, place_to_visits: data.place_to_visits,})
        // dispatch({type: types.SET_HALLS_TO_PLACES, halls_to_places: data.halls_to_places})
      },
      errors: (data) => {
        console.log('error fetch visits')
      }
    })
  }
}
export function openVisit(visit) {
  return (dispatch) => {
    console.log('open visit')

    fetchDataClean({
      url: '/visits',
      method: 'POST',
      data: visit,
      success: (data) => {
        console.log('succes open visit')
        dispatch({type: types.ERASE_CHOOSED_PLACE})
        dispatch
      },
      errors: (data) => { console.log('error open visit') },
    })
  }
}
export const addVisit = (data) => ({
  type: types.ADD_VISIT,
  data,
});
export function closeVisit(visit) {
  return (dispatch) => {
    console.log('delete visit')

    fetchDataClean({
      url: '/visits/' + visit.id + '/close',
      method: 'GET',
      success: (data) => {
        console.log('success close visit')
      },
      errors: (data) => { console.log('error close visit') },
    })
  }
}
export const close_visit = (data) => ({
  type: types.CLOSE_VISIT,
  data,
})