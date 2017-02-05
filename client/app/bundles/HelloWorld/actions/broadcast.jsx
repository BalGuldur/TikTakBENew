import actions from './index'

export function channelActions(dispatch, getState, obj) {
  console.log('Faye message')
  console.log(obj)
  dispatch(actions[obj.action](obj.data))
}
