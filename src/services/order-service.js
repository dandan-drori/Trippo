import { httpService } from './http.service.js'

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

const BASE_URL = 'order/'

async function query() {
	return await httpService.get(BASE_URL)
}

function getById(orderId) {
	return httpService.get(`${BASE_URL}${orderId}`)
}

function remove(orderId) {
	return httpService.delete(`${BASE_URL}${orderId}`)
}

function save(order) {
	if (order._id) {
		return httpService.put(`${BASE_URL}${order._id}`, order)
	} else {
		return httpService.post(BASE_URL, order)
	}
}

function getEmptyOrder() {
	return {}
}
