import { userService } from '@/services/user-service.js'
import {
	socketService,
	SOCKET_EVENT_USER_UPDATED,
	SOCKET_EMIT_USER_WATCH,
} from '@/services/socket.service.js'
import { showMsg } from '@/services/event-bus.service.js'

export default {
	state: {
		loggedinUser: userService.getLoggedInUser(),
		users: [],
	},
	getters: {
		users(state) {
			return state.users
		},
		loggedinUser(state) {
			return state.loggedinUser
		},
	},
	mutations: {
		setLoggedinUser(state, { user }) {
			state.loggedinUser = user
		},
		removeUser(state, { userId }) {
			state.users = state.users.filter(u => u._id !== userId)
		},
		updateUserOrders(state, { order }) {
			state.loggedinUser.orders.push(order)
		},
	},
	actions: {
		async login({ commit, dispatch }, { userCred }) {
			try {
				const user = await userService.login(userCred)
				dispatch({ type: 'watchUser' })
				commit({ type: 'setLoggedinUser', user })
				return user
			} catch (err) {
				console.log('userStore: Error in login', err)
				throw err
			}
		},
		async signup({ commit }, { userCred }) {
			try {
				const user = await userService.signup(userCred)
				commit({ type: 'setLoggedinUser', user })
				return user
			} catch (err) {
				console.log('userStore: Error in signup', err)
				throw err
			}
		},
		async logout({ commit }) {
			try {
				await userService.logout()
				commit({ type: 'setLoggedinUser', user: null })
			} catch (err) {
				console.log('userStore: Error in logout', err)
				throw err
			}
		},
		async updateUser({ commit, dispatch, getters }, { user }) {
			try {
				console.log(user)
				await userService.update(user)
				if (getters.loggedinUser.imgUrl !== user.imgUrl) {
					user.stays.forEach(stay => {
						stay.host.imgUrl = user.imgUrl
						dispatch({ type: 'saveStay', stay })
					})
				}
				commit({ type: 'setLoggedinUser', user })
			} catch (err) {
				console.log('userStore: Error updating user', err)
				throw err
			}
		},
		watchUser({ commit, getters }) {
			socketService.emit(SOCKET_EMIT_USER_WATCH, getters.loggedinUser)
			socketService.off(SOCKET_EVENT_USER_UPDATED)
			socketService.on(SOCKET_EVENT_USER_UPDATED, order => {
				commit({ type: 'updateUserOrders', order })
				showMsg(`new order from ${order.buyer.fullname}`)
			})
		},
	},
}
