import * as mainActions from './main'
import * as testActions from './test'
import * as fayeActions from './faye'
import * as locationsActions from './locations'
import * as employeesActions from './employees'
import * as hallsActions from './halls'
import * as placesActions from './places'
import * as menuDepartmentsActions from './menu_departments'
import * as menuCategoriesActions from './menu_categories'
import * as menuItemsActions from './menu_items'
import * as visitsActions from './visits'

const actions = {
  ...mainActions,
  ...testActions,
  ...fayeActions,
  ...locationsActions,
  ...employeesActions,
  ...hallsActions,
  ...placesActions,
  ...menuDepartmentsActions,
  ...menuCategoriesActions,
  ...menuItemsActions,
  ...visitsActions,
}

export default actions