import actions from './index'

export function channelActions(dispatch, getState, obj) {
	switch (obj.action_type) {
	case 'TEST_LOG': {
		dispatch(actions.testLog(obj.data))
		break
	}
	default:
		console.log(obj)
	}
}
export function logMessage(message) {
	console.log(message)
}
