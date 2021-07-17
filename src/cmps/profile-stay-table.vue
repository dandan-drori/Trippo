<template>
	<ul class="profile-stay-table">
		<li class="table-header">
			<div>Name</div>
			<div>Country</div>
			<div>Price / Night</div>
			<div>Actions</div>
		</li>
		<li v-for="stay in stays" :key="stay._id" class="table-row">
			<div>{{ stay.name }}</div>
			<div>{{ stay.country }}</div>
			<div>{{ formattedPrice(stay.price) }}</div>
			<div>
				<button class="edit-btn" @click="onEditStay(stay)">
					<font-awesome-icon :icon="pencil" />
				</button>
				<button class="delete-btn" @click="onRemoveStay(stay)">
					<font-awesome-icon :icon="trash" />
				</button>
			</div>
		</li>
	</ul>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
export default {
	components: { FontAwesomeIcon },
	props: { stays: Array },
	data() {
		return {
			pencil: faPencilAlt,
			trash: faTrash,
		}
	},
	methods: {
		formattedPrice(price) {
			var formatter = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			})
			return formatter.format(price)
		},
		onRemoveStay(stay) {
			this.$store.dispatch({ type: 'removeStay', stayId: stay._id })
		},
		onEditStay(stay) {
			this.$emit('edit-stay', stay)
		},
	},
}
</script>

<style></style>
