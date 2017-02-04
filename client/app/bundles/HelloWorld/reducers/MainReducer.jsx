import { combineReducers } from 'redux';
// import { MAIN_NAME_UPDATE } from '../constants/main';
import * as types from '../constants/main'

const name = (state = '', action) => {
  switch (action.type) {
    case types.MAIN_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};
const current_user = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
}
const current_company = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
}
const menu_items = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
}
const locations = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
}
const faye = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
}
function faye_channels(state = '', action) {
  switch (action.type) {
    case types.ADD_FAYE_CHANNEL:
      return [...state, action.channel];
    case types.DELETE_FAYE_CHANNEL:
      return state.filter(element => element !== action.channel)
    default:
      return state;
  }
}

const MainReducer = combineReducers({ name, current_user, menu_items, locations, current_company, faye, faye_channels });

export default MainReducer;
