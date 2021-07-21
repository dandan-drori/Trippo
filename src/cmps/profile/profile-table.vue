<template>
	<ul>
		<li class="table-header">
			<div>Guest</div>
			<div>Stay</div>
			<div>{{ sentOrRecieved }}</div>
			<div>Check-In</div>
			<div>Check-Out</div>
			<div>Status</div>
			<div v-if="showActions">Actions</div>
		</li>
		<li v-for="order in orders" :key="order._id" class="table-row">
			<div>
				<img :src="order.buyer.imgUrl" />
				{{ longText(buyer(order)) }}
			</div>
			<div>{{ longText(order.stay.name) }}</div>
			<div>{{ order.createdAt | moment('from') }}</div>
			<div>{{ order.startDate | moment('MMMM Do YYYY') }}</div>
			<div>{{ order.endDate | moment('MMMM Do YYYY') }}</div>
			<div
				:class="{
					warning: order.status === 'pending',
					error: order.status === 'rejected',
					success: order.status === 'approved',
				}"
			>
				{{ order.status }}
			</div>
			<div v-if="showActions">
				<button
					:class="{
						approve: true,
						warning: order.status === 'pending',
						error: order.status === 'rejected',
						success: order.status === 'approved',
					}"
					@click="changeOrderStatus(order, 'approved')"
				>
					<font-awesome-icon :icon="check" />
				</button>
				<button
					:class="{
						reject: true,
						warning: order.status === 'pending',
						error: order.status === 'rejected',
						success: order.status === 'approved',
					}"
					@click="changeOrderStatus(order, 'rejected')"
				>
					<font-awesome-icon :icon="times" />
				</button>
			</div>
		</li>
	</ul>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { showMsg } from '@/services/event-bus.service.js'

import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
export default {
	components: { FontAwesomeIcon },
	props: { orders: Array, stays: Array, showActions: Boolean },
	data() {
		return {
			localOrders: this.orders || [],
			check: faCheck,
			times: faTimes,
			isActionsShown: true,
		}
	},
	computed: {
		loggedInUser() {
			return this.$store.getters.loggedinUser
		},
		sentOrRecieved() {
			if (this.loggedInUser._id === this.orders[0].buyer._id) {
				return 'Sent At'
			}
			return 'Recieved At'
		},
	},
	methods: {
		async changeOrderStatus(order, newStatus) {
			try {
				order.status = newStatus
				const stay = this.stays.find(s => s._id === order.stay._id)
				await this.$store.dispatch({
					type: 'saveOrder',
					order,
					stay,
				})
				showMsg('order status updated')
			} catch (err) {
				showMsg('Order edit failed')
			}
		},
		buyer(order) {
			if (order?.buyer) {
				return order.buyer.fullname
			}
			return this.loggedInUser.fullname
		},
		longText(txt) {
			if (txt.length < 10) return txt
			return txt.substring(0, 10) + '...'
		},
	},
}
</script>
