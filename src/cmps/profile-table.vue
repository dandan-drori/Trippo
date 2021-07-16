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
			<div>{{ order.buyer.fullname }}</div>
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
			<div>
				<button
					:class="{
						approve: true,
						warning: order.status === 'pending',
						error: order.status === 'rejected',
						success: order.status === 'approved',
					}"
					@click="changeOrderStatus(order, 'approve')"
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
					@click="changeOrderStatus(order, 'reject')"
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
	methods: {
		async changeOrderStatus(order, newStatus) {
			const newOrder = await this.$store.dispatch({ type: 'updateOrderStatus', order, newStatus })
			console.log('newStatus', newOrder.status)
		},
	},
}
</script>

<style></style>
