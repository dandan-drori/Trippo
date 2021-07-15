<template>
	<section class="user-profile" v-if="loggedInUser">
		<section class="profile-card">
			<div>
				<img :src="require('@/assets/imgs/userImgs/' + loggedInUser.imgUrl)" alt="" />
				<p>update photo</p>
			</div>
			<div>
				<p>content...</p>
			</div>
		</section>
		<section class="data">
			<section class="statistics">
				<p>Assets you own: {{ loggedInUser.stays.length }}</p>
				<p>Orders: {{ loggedInUser.orders.length }}</p>
			</section>
			<section>
				<h2>Orders:</h2>
				<article v-for="stay in loggedInUser.stays" :key="stay._id">
					<el-table :data="computedOrders" style="width: 100%" :row-class-name="tableRowClassName">
						<el-table-column prop="buyer.fullname" label="Name" width="180"> </el-table-column>
						<el-table-column prop="startDate" label="Check-In" width="180"> </el-table-column>
						<el-table-column prop="endDate" label="Check-Out" width="180"> </el-table-column>
						<!-- <el-table-column prop="status" label="Check-Out" width="180"> </el-table-column> -->
					</el-table>
				</article>
			</section>
		</section>
	</section>
</template>

<script>
export default {
	methods: {
		tableRowClassName({ row, rowIndex }) {
			if (rowIndex === 1) {
				return 'warning-row'
			} else if (rowIndex === 3) {
				return 'success-row'
			}
			return ''
		},
	},
	computed: {
		loggedInUser() {
			return this.$store.getters.loggedinUser
		},
		computedOrders() {
			return this.loggedInUser.orders.map(order => {
				for (let i = 0; i < this.loggedInUser.stays.length; i++) {
					if (order.stay._id === this.loggedInUser.stays[i]._id) {
						const newOrder = JSON.parse(JSON.stringify(order))
						newOrder.startDate = new Date(newOrder.startDate).toLocaleString().split(',')[0]
						newOrder.endDate = new Date(newOrder.endDate).toLocaleString().split(',')[0]
						return newOrder
					}
				}
			})
		},
	},
}
</script>
