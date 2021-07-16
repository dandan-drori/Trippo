<template>
	<section class="user-profile" v-if="loggedInUser">
		<section class="profile-card">
			<div>
				<img :src="require('@/assets/imgs/userImgs/' + loggedInUser.imgUrl)" alt="" />
				<p>update photo</p>
			</div>
			<div>
				<button class="add-stay" @click="openModal">Add New Stay</button>
			</div>
		</section>
		<stay-add v-if="isModalOpen" @close="closeModal" />
		<section class="data" v-else>
			<section class="statistics">
				<p>Assets you own: {{ loggedInUser.stays.length }}</p>
				<p>Orders: {{ loggedInUser.orders.length }}</p>
			</section>
			<section class="orders-table">
				<h2>Orders:</h2>
				<profile-filter :isStaysFilter="false" @filter="setFilter" />
				<profile-table :orders="computedOrders" />
			</section>
			<section class="stays-table">
				<h2>Stays:</h2>
				<profile-filter :isStaysFilter="true" @filter="setStaysFilter" />
				<profile-stay-table :stays="computedStays" />
			</section>
		</section>
	</section>
</template>

<script>
import profileFilter from '@/cmps/profile-filter'
import stayAdd from '@/cmps/stay-add'
import profileTable from '@/cmps/profile-table'
import ProfileStayTable from '../cmps/profile-stay-table.vue'

export default {
	components: { profileFilter, stayAdd, profileTable, ProfileStayTable },
	data() {
		return {
			isModalOpen: false,
			filterBy: {
				name: '',
				status: '',
			},
			staysFilterBy: {
				name: '',
				country: '',
			},
		}
	},
	methods: {
		tableRowClassName({ row, rowIndex }) {
			switch (rowIndex) {
				case 0:
			}

			if (row.status === 'pending') {
				return 'warning-row'
			} else if (row.status === 'rejected') {
				return 'error-row'
			} else if (row.status === 'approved') {
				return 'success-row'
			}
			return ''
		},
		setFilter(filterBy) {
			this.filterBy = filterBy
		},
		setStaysFilter(filterBy) {
			this.staysFilterBy = filterBy
		},
		openModal() {
			this.isModalOpen = true
		},
		closeModal(val) {
			this.isModalOpen = val
		},
	},
	computed: {
		loggedInUser() {
			return this.$store.getters.loggedinUser
		},
		computedOrders() {
			const orders = this.loggedInUser.orders.map(order => {
				for (let i = 0; i < this.loggedInUser.stays.length; i++) {
					if (order.stay._id === this.loggedInUser.stays[i]._id) {
						const regex = new RegExp(this.filterBy.name, 'i')
						if (order.status.includes(this.filterBy.status) && regex.test(order.stay.name)) {
							const newOrder = JSON.parse(JSON.stringify(order))
							newOrder.startDate = new Date(newOrder.startDate).toLocaleString().split(',')[0]
							newOrder.endDate = new Date(newOrder.endDate).toLocaleString().split(',')[0]
							return newOrder
						}
					}
				}
			})
			return orders.filter(o => o)
		},
		computedStays() {
			return this.loggedInUser.stays.filter(stay => {
				const regex = new RegExp(this.staysFilterBy.name, 'i')
				return regex.test(stay.name) || regex.test(stay.country)
			})
		},
	},
	created() {
		this.$emit('scrolled', true)
	},
}
</script>
