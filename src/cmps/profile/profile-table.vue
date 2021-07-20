<template>
	<ul>
		<li class="table-header">
			<div>Stay</div>
			<div>Guest</div>
			<div>Check-In</div>
			<div>Check-Out</div>
			<div>Status</div>
			<div v-if="showActions">Actions</div>
		</li>
		<li v-for="order in localOrders" :key="order._id" class="table-row">
			<div>{{ order.stay.name }}</div>
			<div>{{ buyer(order) }}</div>
			<div>{{ order.startDate }}</div>
			<div>{{ order.endDate }}</div>
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
	},
	methods: {
		async changeOrderStatus(order, newStatus) {
			try {
				await this.$store.dispatch({
					type: 'updateOrderStatus',
					order,
					newStatus,
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
	},
	watch: {
		orders() {
			return {
				handler(newVal) {
					this.localOrders = newVal
				},
				deep: true,
			}
		},
	},
}
</script>
