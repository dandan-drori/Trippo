import { storageService } from './async-storage-service.js'

const gUsers = [
	{
		_id: 'u101',
		fullname: 'User 1',
		imgUrl: 'host4.jpg',
		// isHost: false,
		username: 'user1',
		password: 'secret',
		orders: [
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
					_id: '10001247',
					name: 'House Of Uncle My',
					price: 80.0,
				},
				status: 'pending',
			},
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
					_id: '10001247',
					name: 'New Stay',
					price: 80.0,
				},
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
	getLoggedInUser,
	increaseScore,
}

async function getUsers() {
	return await storageService.query('user')
}

async function getById(userId) {
	return await storageService.get(`user/${userId}`)
}

async function remove(userId) {
	return await storageService.delete(`user/${userId}`)
}

async function update(user) {
	// user = await storageService.put(`user/${user._id}`, user)
	_saveLocalUser(user)
}

async function increaseScore(by = SCORE_FOR_REVIEW) {
	const user = getLoggedinUser()
	user.score = user.score + by || by
	await update(user)
	return user.score
}

async function login(userCred) {
	const user = await storageService.post('auth/login', userCred)
	if (user) return _saveLocalUser(user)
}

async function signup(userCred) {
	const user = await storageService.post('auth/signup', userCred)
	return _saveLocalUser(user)
}

async function logout() {
	sessionStorage.clear()
	return await storageService.post('auth/logout')
}

function _saveLocalUser(user) {
	sessionStorage.setItem('loggedinUser', JSON.stringify(user))
	return user
}

function getLoggedInUser() {
	const userInStorage = JSON.parse(sessionStorage.getItem('loggedinUser') || 'null')
	console.log('userInStorage', userInStorage)
	if (!userInStorage || !Object.keys(userInStorage).length) {
		_saveLocalUser(gUsers[0])
		return gUsers[0]
	}
	return userInStorage
}
