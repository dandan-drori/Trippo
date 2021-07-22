<template>
	<section class="dashboard-container">
		<h2>User Dashboard</h2>
		<section class="orders-table">
			<h2>My reservations:</h2>
			<profile-filter :isStaysFilter="false" @filter="setFilter" />
			<profile-table v-if="sentOrders.length" :orders="sentOrders" :showActions="false" />
		</section>
		<section class="orders-table">
			<h2>Orders:</h2>
			<profile-filter :isStaysFilter="false" @filter="setFilter" />
			<profile-table
				v-if="recievedOrders.length"
				:orders="recievedOrders"
				:stays="stays"
				:showActions="true"
			/>
		</section>
		<h3>Bar chart header</h3>
		<section class="flex-container">
			<bar-chart class="chart" :totalEarnings="totalEarnings" />
			<section class="statistics">
				<p>
					Assets you own: <span>{{ staysLength }}</span>
				</p>
				<p>
					Orders: <span>{{ sentOrdersLength }}</span>
				</p>
				<p>
					Reservations: <span>{{ recievedOrdersLength }}</span>
				</p>
				<p>
					Curr month earnings: <span>${{ currMonthEarnings }}</span>
				</p>
			</section>
		</section>
	</section>
</template>

<script>
import barChart from './bar-chart.vue'
import profileFilter from '@/cmps/profile/profile-filter'
import profileTable from '@/cmps/profile/profile-table'
export default {
	components: { barChart, profileFilter, profileTable },
	props: { totalEarnings: Array, orders: Array, stays: Array },
	data() {
		return {
			filterBy: {
				name: '',
				status: '',
			},
		}
	},
	computed: {
		loggedInUser() {
			return this.$store.getters.loggedinUser
		},
		staysLength() {
			if (!this.$store.getters.orders.length) return 0
			return this.$store.getters.stays.reduce((acc, stay) => {
				return this.$store.getters.loggedinUser._id === stay.host._id ? acc + 1 : acc
			}, 0)
		},
		sentOrdersLength() {
			if (!this.$store.getters.orders.length) return 0
			return this.$store.getters.orders.reduce((acc, order) => {
				return this.$store.getters.loggedinUser._id === order.buyer._id ? acc + 1 : acc
			}, 0)
		},
		recievedOrdersLength() {
			if (!this.$store.getters.orders.length) return 0
			return this.$store.getters.orders.reduce((acc, order) => {
				return this.$store.getters.loggedinUser._id === order.host._id ? acc + 1 : acc
			}, 0)
		},
		currMonthEarnings() {
			const currMonth = new Date().getMonth()
			return this.orders.reduce((acc, order) => {
				const month = new Date(order.startDate).getMonth()
				return currMonth === month ? acc + order.total : acc
			}, 0)
		},
		sentOrders() {
			const orders = this.$store.getters.orders.map(order => {
				if (order.buyer._id === this.loggedInUser._id) {
					const regex = new RegExp(this.filterBy.name, 'i')
					if (order.status.includes(this.filterBy.status) && regex.test(order.stay.name)) {
						return order
					}
				}
			})
			return orders.filter(o => o)
		},
		recievedOrders() {
			const orders = this.$store.getters.orders.map(order => {
				if (order.host._id === this.loggedInUser._id && this.loggedInUser._id !== order.buyer._id) {
					const regex = new RegExp(this.filterBy.name, 'i')
					if (order.status.includes(this.filterBy.status) && regex.test(order.stay.name)) {
						return order
					}
				}
			})
			return orders.filter(o => o)
		},
	},
	methods: {
		setFilter(filterBy) {
			this.filterBy = filterBy
		},
	},
	created() {},
}
</script>
