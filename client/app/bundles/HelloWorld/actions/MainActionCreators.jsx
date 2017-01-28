/* eslint-disable import/prefer-default-export */

import { MAIN_NAME_UPDATE } from '../constants/MainConstants';

export const updateName = (text) => ({
  type: MAIN_NAME_UPDATE,
  text,
});
