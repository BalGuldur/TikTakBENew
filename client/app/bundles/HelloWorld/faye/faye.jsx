// import confirm from '../frontend/actions/confirm'

const BackoffScheduler = function () {
	Faye.Scheduler.apply(this, arguments)
}
BackoffScheduler.prototype = Object.create(Faye.Scheduler.prototype)

// Расширение для оповещения при разрыве соединения
// const Notification = {
// 	outgoing: function (message, callback) {
// 		if (message.channel === '/meta/disconnect') {
// 			BackoffScheduler.prototype.fail = function () {
// 				Faye.Scheduler.prototype.fail.apply(this, arguments)
// 				console.log('Переподключение к серверу сообщений')
// 			}
// 		}
// 		else {
// 			BackoffScheduler.prototype.fail = function () {
// 				Faye.Scheduler.prototype.fail.apply(this, arguments)
// 				confirm('Соединение с сервером потеряно, нажмите ДА чтобы перезагрузить.').then(
// 					(result) => {
// 						location.reload();
// 					},
// 					(result) => {
// 						location.reload();
// 					}
// 				)
// 			}
// 		}
// 		callback(message)
// 	},
// }

const Client = new Faye.Client(gon.faye.server, {scheduler: BackoffScheduler})

// Client.addExtension(Notification)
//
// setInterval(() => {
// 	Client.publish('/ping', {
// 		date: new Date().valueOf(),
// 	})
// }, 30000)

// TODO: Поправить авторизацию faye для исходящих из клиента сообщений
const Auth = {
	outgoing: function(message, callback) {
		let ref;
		if (message['channel'] !== '/meta/subscribe') {
			return callback(message);
		}

		if (message['ext'] == null) {
			message['ext'] = {};
		}
		message['ext']['client_token'] = (ref = gon.user) != null ? ref.faye_token : void 0;
		return callback(message);
	}
};

Client.addExtension(Auth);

export default Client
