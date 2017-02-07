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
const current_location = (state = '', action) => {
  switch (action.type) {
    case types.CHOOSE_LOCATION:
      return action.data
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
    case types.REMOVE_LOCATION:
      return state.filter(element => element.id !== action.location.id)
    case types.ADD_LOCATION:
      return [...state, action.location]
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
function initial_faye_channels(state = '', action) {
  switch (action.type) {
    default:
      return state;
  }
}
function userSubscriptions(state = '', action) {
  switch (action.type) {
    case types.SET_USER_SUBSCRIPTIONS:
      return action.subscribes;
    default:
      return state;
  }
}
function employees(state = '', action) {
  switch (action.type) {
    case types.SET_EMPLOYEES:
      return action.data;
    case types.ADD_EMPLOYEE:
      return [...state, action.employee]
    case types.DELETE_EMPLOYEE:
      return state.filter(element => element.id !== action.employee.id)
    default:
      return state;
  }
}
function auth_link(state = '', action) {
  switch (action.type) {
    case types.SET_AUTH_LINK:
      return action.auth_link
    default:
      return state;
  }
}
function halls(state = '', action) {
  switch (action.type) {
    case types.SET_HALLS:
      return action.data
    default:
      return state;
  }
}
function places(state = '', action) {
  switch (action.type) {
    case types.SET_PLACES:
      return action.data
    default:
      return state;
  }
}

const MainReducer = combineReducers({
  name,
  current_user,
  menu_items,
  locations,
  current_company,
  current_location,
  faye,
  initial_faye_channels,
  userSubscriptions,
  employees,
  auth_link,
  halls,
  places,
});

export default MainReducer;
