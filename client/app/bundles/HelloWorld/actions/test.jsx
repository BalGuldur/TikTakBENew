/* eslint-disable import/prefer-default-export */

import { fetchData, fetchDataClean } from './helpers'

export function testLog(obj) {
  return (dispatch) => {
    console.log('Test log ' + obj )
  }
};
