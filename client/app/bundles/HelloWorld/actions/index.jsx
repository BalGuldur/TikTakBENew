import * as mainActions from './main'
import * as testActions from './test'
import * as fayeActions from './faye'
import * as locationsActions from './locations'
import * as employeesActions from './employees'
import * as hallsActions from './halls'
import * as placesActions from './places'

const actions = {
  ...mainActions,
  ...testActions,
  ...fayeActions,
  ...locationsActions,
  ...employeesActions,
  ...hallsActions,
  ...placesActions,
}

export default actions