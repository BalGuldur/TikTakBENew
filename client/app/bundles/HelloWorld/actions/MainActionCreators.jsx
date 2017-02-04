/* eslint-disable import/prefer-default-export */

import { MAIN_NAME_UPDATE } from '../constants/MainConstants';

import { fetchData, fetchDataClean } from './helpers'

export const updateName = (text) => ({
  type: MAIN_NAME_UPDATE,
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
