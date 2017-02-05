/* eslint-disable import/prefer-default-export */

// import { MAIN_NAME_UPDATE } from '../constants/main';
import * as types from '../constants/main'

import { fetchData, fetchDataClean } from './helpers'

export const updateName = (text) => ({
  type: types.MAIN_NAME_UPDATE,
  text,
});
