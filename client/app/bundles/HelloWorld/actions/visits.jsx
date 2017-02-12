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
        dispatch({type: types.SET_VISITS, visits: data.visits,})
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
      success: (data) => { console.log('succes open visit') },
      errors: (data) => { console.log('error open visit') },
    })
  }
}