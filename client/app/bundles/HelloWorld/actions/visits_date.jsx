import * as types from '../constants/main'

// import { fetchData, fetchDataClean } from './helpers'

export const changeVisitsDate = (date) => ({
  type: types.CHANGE_VISITS_DATE,
  date,
})