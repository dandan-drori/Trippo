import { storageService } from './async-storage-service.js'

const gUsers = [
	{
		_id: 'u101',
		fullname: 'User 1',
		imgUrl: '@/assets/imgs/userImgs/host4.jpg',
		isHost: false,
		username: 'user1',
		password: 'secret',
		orders: [],
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
	user = await storageService.put(`user/${user._id}`, user)
	// Handle case in which admin updates other user's details
	// if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
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
	// return JSON.parse(sessionStorage.getItem('loggedinUser') || 'null')
	return gUsers[0]
}
