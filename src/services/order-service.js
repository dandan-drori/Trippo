import { storageService } from './async-storage-service.js'

const gOrders = [
	{
		_id: 'o1225',
		_hostId: 'u102',
		createdAt: 9898989,
		buyer: {
			_id: 'u101',
			fullname: 'User 1',
			imgUrl: 'imgs/user1.jpg',
		},
		totalPrice: 160,
		startDate: 162818371828,
		endDate: 162829321938,
		guests: 3,
		stay: {
			_id: 'h102',
			name: 'House Of Uncle My',
			price: 80.0,
		},
		status: 'pending',
	},
]

export const orderService = {
	query,
	getById,
	remove,
	save,
	getEmptyOrder,
}

const ORDER_KEY = 'orders'

async function query() {
	const ordersInStorage = await storageService.query(ORDER_KEY)
	if (!ordersInStorage || !ordersInStorage.length) {
		localStorage.setItem(ORDER_KEY, JSON.stringify(gOrders))
		return gOrders
	}
	return ordersInStorage
}

function getById(orderId) {
	return storageService.get(ORDER_KEY, orderId)
}

function remove(orderId) {
	return storageService.delete(ORDER_KEY, orderId)
}

function save(order) {
	return storageService.post(ORDER_KEY, order)
	if (order._id) {
		return storageService.put(ORDER_KEY, order)
	} else {
	}
}

function getEmptyOrder() {
	return {
		createdAt: Date.now(),
		status: 'pending',
	}
}
