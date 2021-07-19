import { httpService } from './http.service.js'

const gUsers = [
	{
		_id: 'u101',
		fullname: 'User 1',
		imgUrl: 'host4.jpg',
		username: 'user1',
		password: 'secret',
		orders: [
			{
				_id: 'o1225',
				_hostId: 'u102',
				createdAt: 9898989,
				totalPrice: 160,
				startDate: 162818371828,
				endDate: 162829321938,
				status: 'rejected',
			},
			{
				_id: 'o1227',
				_hostId: 'u102',
				createdAt: 9898989,
				totalPrice: 160,
				startDate: 162818371828,
				endDate: 162829321938,
				status: 'approved',
			},
			{
				_id: 'o1226',
				_hostId: 'u102',
				createdAt: 9898989,
				totalPrice: 160,
				startDate: 162818371828,
				endDate: 162829321938,
				status: 'pending',
			},
		],
		stays: [
			{
				_id: '10001247',
				name: 'Furnished Studio in Manhattan',
				price: 363.0,
				country: 'New York',
			},
		],
	},
]

export const userService = {
	login,
	logout,
	signup,
	getUsers,
	getById,
	remove,
	update,
	removeStay,
	getLoggedInUser,
}

window.userService = userService

// userService.signup({ fullname: 'guest', username: 'guest', password: '123' })

const BASE_URL = 'user/'

async function getUsers() {
	return await httpService.get(BASE_URL)
}
async function getById(userId) {
	return await httpService.get(`${BASE_URL}${userId}`)
}
async function remove(userId) {
	return await httpService.delete(`${BASE_URL}${userId}`)
}
async function update(user, isHost) {
	console.log('user', user)
	if (user && !isHost) _saveLocalUser(user)
	return await httpService.put(`${BASE_URL}${user._id}`, user)
}

async function login(userCred) {
	const user = await httpService.post('auth/login', userCred)
	if (user) return _saveLocalUser(user)
}

async function signup(userCred) {
	const user = await httpService.post('auth/signup', userCred)
	return _saveLocalUser(user)
}

async function logout() {
	sessionStorage.clear()
	return await httpService.post('auth/logout')
}

async function removeStay(stayId, user) {
	const idx = user.stays.findIndex(stay => stay._id === stayId)
	user.stays.splice(idx, 1)
	return await httpService.put(`${BASE_URL}${user._id}`, user)
}

function getLoggedInUser() {
	return JSON.parse(sessionStorage.getItem('loggedinUser') || 'null')
}

function _saveLocalUser(user) {
	console.log('user', user)
	sessionStorage.setItem('loggedinUser', JSON.stringify(user))
	return user
}
