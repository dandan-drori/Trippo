import { orderService } from '@/services/order-service.js'
import { userService } from '@/services/user-service.js'

export default {
	state: {
		orders: [],
	},
	getters: {
		orders(state) {
			return state.orders
		},
	},
	mutations: {
		setOrders(state, { orders }) {
			state.orders = orders
		},
		updateOrder(state, { order }) {
			const idx = state.orders.findIndex(o => o._id === order._id)
			state.orders.splice(idx, 1, order)
		},
		addOrder(state, { order }) {
			state.orders.push(order)
		},
	},
	actions: {
		async loadOrders({ commit }) {
			try {
				const orders = await orderService.query()
				commit({ type: 'setOrders', orders })
				return orders
			} catch (err) {
				console.log('Failed to load orders', err)
				throw err
			}
		},
		async saveOrder({ commit, rootGetters }, { order, stay }) {
			try {
				const type = order._id ? 'updateOrder' : 'addOrder'
				const user = rootGetters.loggedinUser
				const miniUser = {
					_id: user._id,
					fullname: user.fullname,
					imgUrl: user.imgUrl,
				}
				const miniStay = {
					_id: stay._id,
					name: stay.name,
					price: stay.price,
					country: stay.loc.address,
				}
				order.buyer = miniUser
				order.stay = miniStay
				order.host = stay.host
				const savedOrder = await orderService.save(order)
				commit({ type, order: savedOrder })
				delete order.buyer
				user.orders.push(order)
				await userService.update(user)
				return savedOrder
			} catch (err) {
				console.log('Failed to save order', err)
				throw err
			}
		},
		async updateOrderStatus({ commit }, { order, newStatus }) {
			try {
				order.status = newStatus
				const savedOrder = await orderService.save(order)
				commit({ type: 'updateOrder', order: savedOrder })
				return savedOrder
			} catch (err) {
				console.log('Failed to save order', err)
				throw err
			}
		},
	},
}
