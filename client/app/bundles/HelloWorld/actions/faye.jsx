import * as types from '../constants/main'
// import Client from '../faye/faye'
// import {chanelActions} from './broadcast'

// export function updateUserSubscriptions() {
// 	const channels =
//
// 	return (dispatch, getState) => {
// 		let {userSubscriptions} = getState()
//
// 		console.log(channels, userSubscriptions)
//
// 		if (gon.current_user && !userSubscriptions) {
// 			userSubscriptions = channels.map(ch =>
// 				Client.subscribe(ch, chanelActions.bind(null, dispatch, getState))
// 			)
//
// 			dispatch(setUserSubscriptions(userSubscriptions))
// 		}
// 	}
// }

export const addFayeChannel = (channel) => ({
  type: types.ADD_FAYE_CHANNEL,
  channel,
});
export const deleteFayeChannel = (channel) => ({
  type: types.DELETE_FAYE_CHANNEL,
  channel,
})

// export function updateBroadcastSubscription() {
// 	return (dispatch, getState) => {
// 		const {broadcastSubcription} = getState()

// 		!!broadcastSubcription && !!broadcastSubcription.cancel && broadcastSubcription.cancel()

// 		const chanel = '/broadcast'
// 		const subscription = Client.subscribe(chanel, chanelActions.bind(null, dispatch, getState))

// 		dispatch(setBroadcastSubscription(subscription))
// 	}
// }

// export function setBroadcastSubscription(subscription) {
// 	return {type: types.SET_BROADCAST_SUBSCRIPTION, subscription}
// }

// export function setUserSubscriptions(subscriptions) {
// 	return {type: types.SET_USER_SUBSCRIPTIONS, subscriptions}
// }
