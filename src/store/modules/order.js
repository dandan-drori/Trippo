import { orderService } from '@/services/order-service.js'
import { showMsg } from '@/services/event-bus.service.js'
import {
	socketService,
	SOCKET_EVENT_ORDER_UPDATED,
	SOCKET_EMIT_ORDER_WATCH,
	SOCKET_EMIT_ORDER_ADDED_WATCH,
	SOCKET_EVENT_ORDER_ADDED,
} from '@/services/socket.service.js'

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
				throw err
			}
		},
		async saveOrder({ commit, rootGetters }, { order, stay }) {
			try {
				const type = order._id ? 'updateOrder' : 'addOrder'
				if (!order._id) {
					const miniStay = {
						_id: stay._id,
						name: stay.name,
						price: stay.price,
						country: stay.loc.address,
					}
					order.stay = miniStay
					order.host = stay.host
					order.buyer = rootGetters.loggedinUser
				} else {
				}
				const savedOrder = await orderService.save(order)
				commit({ type, order: savedOrder })
				return savedOrder
			} catch (err) {
				throw err
			}
		},
		async watchOrderAdded({ commit, rootGetters }) {
			socketService.emit(SOCKET_EMIT_ORDER_ADDED_WATCH, rootGetters.loggedinUser)
			socketService.off(SOCKET_EVENT_ORDER_ADDED)
			socketService.on(SOCKET_EVENT_ORDER_ADDED, order => {
				if (order.host._id === rootGetters.loggedinUser._id) {
					commit({ type: 'addOrder', order })
					showMsg(`new order from ${order.buyer.fullname}`)
				}
			})
		},
		async watchOrder({ commit }, { userId }) {
			socketService.emit(SOCKET_EMIT_ORDER_WATCH, userId)
			socketService.off(SOCKET_EVENT_ORDER_UPDATED)
			socketService.on(SOCKET_EVENT_ORDER_UPDATED, async order => {
				if (order.buyer._id === userId) {
					commit({ type: 'updateOrder', order })
					showMsg(`your order status was updated to ${order.status}`)
				}
			})
		},
	},
}
