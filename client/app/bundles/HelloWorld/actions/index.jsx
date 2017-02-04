import * as mainActions from './main'
import * as testActions from './test'
import * as fayeActions from './faye'

const actions = {
  ...mainActions,
  ...testActions,
  ...fayeActions,
}

export default actions