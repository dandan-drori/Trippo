import { userService } from '@/services/user-service.js'

export default {
	state: {
		// loggedinUser: userService.getLoggedInUser(),
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
	},
	actions: {
		async login({ commit }, { userCred }) {
			try {
				const user = await userService.login(userCred)
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
	},
}
