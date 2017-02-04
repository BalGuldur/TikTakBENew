/* eslint-disable import/prefer-default-export */

// import { MAIN_NAME_UPDATE } from '../constants/main';
import * as types from '../constants/main'

import { fetchData, fetchDataClean } from './helpers'

export const updateName = (text) => ({
  type: types.MAIN_NAME_UPDATE,
  text,
});
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
};
