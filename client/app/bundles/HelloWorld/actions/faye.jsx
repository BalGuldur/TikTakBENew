import * as types from '../constants/main'
import fayeSubscribe from '../faye/faye'
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

export const setUserSubscriptions = (channels, server) => ({
    type: types.SET_USER_SUBSCRIPTIONS,
    subscribes: fayeSubscribe(channels, server)
})

export function initialUserSubscriptions() {
  return (dispatch, getState) => {
    let { initial_faye_channels } = getState()
    let { faye } = getState()

    dispatch(setUserSubscriptions(initial_faye_channels, faye.server))
    // return {
    //   type: types.SET_USER_SUBSCRIPTIONS,
    //   subscribes: fayeSubscribe(initial_faye_channels, faye.server)
    // }
  }
}

export function cancelAllUserSubscriptions() {
  return (dispatch, getState) => {
    let {userSubscriptions} = getState()
    userSubscriptions.map(subs => subs.cancel())
  }
}


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
