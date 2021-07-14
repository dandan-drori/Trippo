import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import stayApp from '../views/stay-app.vue'
import stayDetails from '../views/stay-details.vue'
import stayEdit from '../views/stay-edit.vue'
import userProfile from '../views/user-profile.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: home,
	},
	{
		path: '/about',
		component: about,
	},
	{
		path: '/stay',
		component: stayApp,
	},
	{
		path: '/stay/:stayId',
		component: stayDetails,
	},
	{
		path: '/stay/edit/:stayId?',
		component: stayEdit,
	},
	{
		path: '/profile/:userId',
		component: userProfile,
	},
]

const router = new VueRouter({
	routes,
})

export default router
