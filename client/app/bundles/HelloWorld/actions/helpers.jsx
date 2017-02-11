import _ from 'lodash'

const token = document.querySelector('meta[name="csrf-token"]').content

const throttled = _.throttle((data, dispatch) => {
	$.ajax({
		url: data.url,
		data: data.data,
		method: data.method || 'GET',
		success: data.success ?
			res => dispatch(data.success(res)) :
			false,
		error: data.error ?
			res => dispatch(data.error(res)) :
			false,
		beforeSend: (xhr) => {
			xhr.setRequestHeader('X-CSRF-Token', token)
		},
		...data.additional,
	})
}, 1000)

export function fetchData(data) {
	return (dispatch) => {
		throttled(data, dispatch, token)
	}
}

const throttledClean = _.throttle((data) => {
	$.ajax({
		url: data.url,
		data: data.data,
		method: data.method || 'GET',
		success: data.success ?
			res => data.success(res) :
			false,
		error: data.error ?
			res => data.error(res) :
			false,
		beforeSend: (xhr) => {
			console.log('before send ajax')
			xhr.setRequestHeader('X-CSRF-Token', token)
		},
		...data.additional,
	})
}, 100)

export function fetchDataClean(data) {
	throttledClean(data, token)
}
