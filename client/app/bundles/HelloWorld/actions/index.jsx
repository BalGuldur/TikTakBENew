import * as mainActions from './main'
import * as testActions from './test'
import * as fayeActions from './faye'
import * as locationsActions from './locations'

const actions = {
  ...mainActions,
  ...testActions,
  ...fayeActions,
  ...locationsActions,
}

export default actions