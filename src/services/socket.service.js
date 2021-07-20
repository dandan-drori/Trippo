import io from 'socket.io-client'
import { httpService } from './http.service.js'

export const SOCKET_EMIT_ORDER_ADDED_WATCH = 'order-added-watch'
export const SOCKET_EVENT_ORDER_ADDED = 'order-added'
export const SOCKET_EMIT_STAY_WATCH = 'stay-watch'
export const SOCKET_EVENT_REVIEW_ADDED = 'review-added'
export const SOCKET_EMIT_ORDER_WATCH = 'order-watch'
export const SOCKET_EVENT_ORDER_UPDATED = 'order-updated'

const baseUrl = process.env.NODE_ENV === 'production' ? '' : '//localhost:3030'
export const socketService = createSocketService()
// export const socketService = createDummySocketService()

window.socketService = socketService

// var socketIsReady = false
socketService.setup()

function createSocketService() {
	var socket = null
	const socketService = {
		async setup() {
			// YaronB: Need to send a dummy ajax request as to setup the socket-session correctly
			// await httpService.get('setup-session')
			// socket = io(baseUrl, { reconnection: false })
			socket = io(baseUrl)
			// socketIsReady = true
		},
		on(eventName, cb) {
			socket.on(eventName, cb)
		},
		off(eventName, cb = null) {
			if (!socket) return
			if (!cb) socket.removeAllListeners(eventName)
			else socket.off(eventName, cb)
		},
		emit(eventName, data) {
			socket.emit(eventName, data)
		},
		terminate() {
			socket = null
		},
	}
	return socketService
}

// eslint-disable-next-line
function createDummySocketService() {
	var listenersMap = {}
	const socketService = {
		listenersMap,
		setup() {
			listenersMap = {}
		},
		terminate() {
			this.setup()
		},
		on(eventName, cb) {
			listenersMap[eventName] = [...(listenersMap[eventName] || []), cb]
		},
		off(eventName, cb) {
			if (!listenersMap[eventName]) return
			if (!cb) delete listenersMap[eventName]
			else listenersMap[eventName] = listenersMap[eventName].filter(l => l !== cb)
		},
		emit(eventName, data) {
			if (!listenersMap[eventName]) return
			listenersMap[eventName].forEach(listener => {
				listener(data)
			})
		},
		debugMsg() {
			this.emit('chat addMsg', { from: 'Someone', txt: 'Aha it worked!' })
		},
	}
	return socketService
}

// Basic Tests
// function cb(x) {console.log(x)}
// socketService.on('baba', cb)
// socketService.emit('baba', 'DATA')
// socketService.off('baba', cb)
