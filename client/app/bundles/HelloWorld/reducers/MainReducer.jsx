import { combineReducers } from 'redux';
import * as types from '../constants/main'
import * as baseActions from './base_reduce_actions'

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
      return action.halls;
    case types.ADD_HALL:
      return Object.assign({}, state, action.data)
    case types.DELETE_HALL:
      return baseActions.deleteElement(state, Object.keys(action.data)[0])
    default:
      return state;
  }
}
function halls_to_places(state = '', action) {
  let hall_to_places = {}
  switch (action.type) {
    case types.SET_HALLS_TO_PLACES:
      return action.halls_to_places
    case types.ADD_HALL:
      hall_to_places[Object.keys(action.data)[0]] = []
      return Object.assign({}, state, hall_to_places)
    case types.ADD_PLACE:
      let place_id = Object.keys(action.data)[0]
      let hall_id = action.data[place_id].hall_id
      hall_to_places[hall_id] = [...state[hall_id], place_id]
      return Object.assign({}, state, hall_to_places)
    // TODO: Сделать delete place
    case types.DELETE_HALL:
      return baseActions.deleteElement(state, Object.keys(action.data)[0])
    default:
      return state;
  }
}
function places(state = '', action) {
  switch (action.type) {
    case types.SET_PLACES:
      return action.data
    case types.ADD_PLACE:
      return Object.assign({}, state, action.data)
    case types.DELETE_PLACE:
      return baseActions.deleteElement(state, Object.keys(action.data)[0])
    case types.EDIT_PLACE:
      let element = action.data
      return Object.assign({}, state, element)
    default:
      return state;
  }
}
function menu_departments(state = '', action) {
  switch (action.type) {
    case types.SET_MENU_DEPARTMENTS:
      return action.menu_departments
    case types.ADD_MENU_DEPARTMENT:
      return Object.assign({}, state, {[action.data.id]: action.data})
    case types.DELETE_MENU_DEPARTMENT:
      return baseActions.deleteElement(state, action.data.id.toString())
    case types.EDIT_MENU_DEPARTMENT:
      return Object.assign({}, state, {[action.data.id]: action.data})
    default:
      return state;
  }
}
function menu_dep_to_menu_cat(state = '', action){
  switch (action.type) {
    case types.SET_MENU_DEPARTMENTS:
      return action.menu_dep_to_menu_cat;
    case types.ADD_MENU_DEPARTMENT:
      return Object.assign({}, state, {[action.data.id]: []})
    case types.DELETE_MENU_DEPARTMENT:
      return baseActions.deleteElement(state, action.data.id.toString())
    case types.ADD_MENU_CATEGORY:
      return baseActions.addNestedElement(state, action.data.menu_department_id, action.data.id);
    default:
      return state;
  }
}
function menu_categories(state = '', action) {
  switch (action.type) {
    case types.SET_MENU_CATEGORIES:
      return action.menu_categories;
    case types.ADD_MENU_CATEGORY:
      return Object.assign({}, state, {[action.data.id]: action.data})
    case types.DELETE_MENU_CATEGORY:
      return baseActions.deleteElement(state, action.data.id.toString())
    default:
      return state;
  }
}
// Object.assign({}, state, action.data)
// {...state, hall}

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
  halls_to_places,
  places,
  menu_departments,
  menu_dep_to_menu_cat,
  menu_categories,
});

export default MainReducer;
