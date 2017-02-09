import * as mainActions from './main'
import * as testActions from './test'
import * as fayeActions from './faye'
import * as locationsActions from './locations'
import * as employeesActions from './employees'
import * as hallsActions from './halls'
import * as placesActions from './places'
import * as menuDepartmentsActions from './menu_departments'
import * as menuCategoriesActions from './menu_categories'

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
}

export default actions