<template>
	<ul>
		<li class="table-header">
			<div>Name</div>
			<div>Guest</div>
			<div>Check-In</div>
			<div>Check-Out</div>
			<div>Status</div>
			<div>Actions</div>
		</li>
		<li v-for="order in orders" :key="order._id" class="table-row">
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
			<div v-if="actionsVisible(order)">
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
import { faCheck, faTimes, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
export default {
	components: { FontAwesomeIcon },
	props: { orders: Array, stays: Array },
	data() {
		return {
			check: faCheck,
			times: faTimes,
			pencil: faPencilAlt,
			trash: faTrash,
		}
	},
	computed: {
		loggedInUser() {
			return this.$store.getters.loggedinUser
		},
	},
	methods: {
		async changeOrderStatus(order, newStatus) {
			return await this.$store.dispatch({ type: 'updateOrderStatus', order, newStatus })
		},

		buyer(order) {
			if (order?.buyer) {
				return order.buyer.fullname
			}
			return this.loggedInUser.fullname
		},

		actionsVisible(order) {
			return order?.buyer
		},
	},
}
</script>

<style></style>
