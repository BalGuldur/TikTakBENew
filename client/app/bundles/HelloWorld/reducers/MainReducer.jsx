import { combineReducers } from 'redux';
import { MAIN_NAME_UPDATE } from '../constants/MainConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case MAIN_NAME_UPDATE:
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

const MainReducer = combineReducers({ name, current_user, menu_items, locations });

export default MainReducer;
