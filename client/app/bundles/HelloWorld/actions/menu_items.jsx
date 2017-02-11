import * as types from '../constants/main'

import { fetchData, fetchDataClean } from './helpers'

// export function fetchMenuItems() {
//   return (dispatch) => {
//     console.log ('fetch menu_items')
//
//     fetchDataClean({
//       url: '/menu_items/index',
//       method: 'GET',
//       success: (data) => {
//         console.log('success fetch menu_items')
//         dispatch({
//           type: types.SET_MENU_ITEMS,
//           menu_items: data.menu_items,
//           // menu_dep_to_menu_cat: data.menu_dep_to_menu_cat,
//         })
//       },
//       errors: (data) => {
//         console.log('error fetch menu_items')
//       }
//     })
//   }
// }
export function createMenuItem(menu_item) {
  return (dispatch) => {
    console.log('create new menu_item')

    fetchDataClean({
      url: '/menu_items',
      method: 'POST',
      data: menu_item,
      success: (data) => {
        console.log('success create menu_item')
        dispatch({type: types.ADD_MENU_ITEM, data})
      },
      errors: (data) => {
        console.log('error create menu_item')
      }
    })
  }
}
export function deleteMenuItem(menu_item) {
  return (dispatch) => {
    console.log('delete menu_item')
    console.log(menu_item)

    fetchDataClean({
      url: '/menu_items/'+menu_item.id,
      method: 'DELETE',
      success: (data) => {
        console.log('success delete menu_item')
        dispatch({type: types.DELETE_MENU_ITEM, data})
      },
      errors: (data) => {
        console.log('error delete employee')
      }
    })
  }
}
export function editMenuItem(menu_item) {
  return (dispatch) => {
    console.log('edit menu_item action')
    console.log(menu_item)

    fetchDataClean({
      url: '/menu_items/'+menu_item.id,
      method: 'PUT',
      data: menu_item,
      success: (data) => {
        console.log('success edit menu_item')
        dispatch({type: types.EDIT_MENU_ITEM, data})
      },
      errors: (data) => {
        console.log('error edit menu_item')
      }
    })
  }
}