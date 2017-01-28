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

const MainReducer = combineReducers({ name, current_user });

export default MainReducer;
