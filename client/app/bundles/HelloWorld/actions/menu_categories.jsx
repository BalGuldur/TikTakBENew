import * as types from '../constants/main'

import { fetchData, fetchDataClean } from './helpers'

// export function fetchMenuCategories() {
//   return (dispatch) => {
//     console.log ('fetch menu_categories')
//
//     fetchDataClean({
//       url: '/menu_categories/index',
//       method: 'GET',
//       success: (data) => {
//         console.log('success fetch menu_categories')
//         dispatch({
//           type: types.SET_MENU_CATEGORIES,
//           menu_categories: data.menu_categories,
//           menu_cat_to_menu_items: data.menu_cat_to_menu_items,
//           // menu_dep_to_menu_cat: data.menu_dep_to_menu_cat,
//         })
//       },
//       errors: (data) => {
//         console.log('error fetch menu_categories')
//       }
//     })
//   }
// }
export function createMenuCategory(menu_category) {
  return (dispatch) => {
    console.log('create new menu_category')

    fetchDataClean({
      url: '/menu_categories',
      method: 'POST',
      data: menu_category,
      success: (data) => {
        console.log('success create menu_category')
        dispatch({type: types.ADD_MENU_CATEGORY, data})
      },
      errors: (data) => {
        console.log('error create menu_category')
      }
    })
  }
}
export function deleteMenuCategory(menu_category) {
  return (dispatch) => {
    console.log('delete menu_category')
    console.log(menu_category)

    fetchDataClean({
      url: '/menu_categories/'+menu_category.id,
      method: 'DELETE',
      success: (data) => {
        console.log('success delete menu_category')
        dispatch({type: types.DELETE_MENU_CATEGORY, data})
      },
      errors: (data) => {
        console.log('error delete employee')
      }
    })
  }
}
export function editMenuCategory(menu_category) {
  return (dispatch) => {
    console.log('edit menu_category action')
    console.log(menu_category)

    fetchDataClean({
      url: '/menu_categories/'+menu_category.id,
      method: 'PUT',
      data: menu_category,
      success: (data) => {
        console.log('success edit menu_category')
        dispatch({type: types.EDIT_MENU_CATEGORY, data})
      },
      errors: (data) => {
        console.log('error edit menu_category')
      }
    })
  }
}