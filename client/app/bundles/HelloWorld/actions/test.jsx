/* eslint-disable import/prefer-default-export */

import { fetchData, fetchDataClean } from './helpers'

export function testLog() {
  return (dispatch) => {
    console.log('Test log action')
  }
}
export function testLogObj(obj) {
  return (dispatch) => {
    console.log('Test log ' + obj )
  }
};
