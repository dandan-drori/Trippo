<template>
	<el-select v-model="filterBy.status" placeholder="Order Status" @change="setFilter">
		<el-option
			v-for="status in statusList"
			:key="status.label"
			:label="status.label"
			:value="status.value"
		>
		</el-option>
	</el-select>
</template>

<script>
export default {
	data() {
		return {
			filterBy: { status: '', name: '' },
			statusList: [
				{ label: 'All', value: '' },
				{ label: 'Pending', value: 'pending' },
				{ label: 'Approved', value: 'approved' },
				{ label: 'Rejected', value: 'rejected' },
			],
		}
	},
	methods: {
		setFilter() {
			this.$emit('filter', { filterBy: this.filterBy })
		},
	},
}
</script>
