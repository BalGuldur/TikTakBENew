import actions from './index'

export function chanelActions(dispatch, getState, obj) {
	switch (obj.action_type) {
	case 'TEST_LOG': {
		dispatch(actions.testLog(obj.data))
		break
	}
	default:
		console.log(obj)
	}
}
