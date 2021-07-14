import { stayService } from '@/services/stay-service.js'

export default {
	state: {
		stays: [],
		filterBy: {
			location: {
				country: '',
				city: '',
			},
			price: {
				from: 0,
				to: 0,
			},
			sortBy: {
				price: '', // from/to
				location: '', // country/city
			},
		},
	},
	getters: {
		stays(state) {
			return state.stays
		},
		filterBy(state) {
			return state.filterBy
		},
	},
	mutations: {
		setStays(state, { stays }) {
			state.stays = stays
		},
		removeStay(state, { stayId }) {
			const idx = state.stays.findIndex(s => s._id === stayId)
			state.stays.splice(idx, 1)
		},
		updateStay(state, { stay }) {
			const idx = state.stays.findIndex(s => s._id === stay._id)
			state.stays.splice(idx, 1, stay)
		},
		addStay(state, { stay }) {
			state.stays.push(stay)
		},
		setFilter(state, { filterBy }) {
			state.filterBy = filterBy
		},
	},
	actions: {
		async loadStays({ commit, getters }, { stays }) {
			try {
				const stays = await stayService.query(getters.filterBy)
				commit({ type: 'setStays', stays })
				return stays
			} catch (err) {
				console.log('Cannot load stays', stays)
				throw err
			}
		},
		async removeStay({ commit }, payload) {
			try {
				await stayService.remove(payload.stayId)
				commit(payload)
			} catch (err) {
				console.log('Cannot remove stay:', payload.stayId)
				throw err
			}
		},
		async saveStay({ commit }, { stay }) {
			const type = stay._id ? 'updateStay' : 'addStay'
			try {
				const savedStay = await stayService.save(stay)
				commit({ type, stay: savedStay })
				return savedStay
			} catch (err) {
				console.log('Prefix', Prefix)
				throw err
			}
		},
	},
}
