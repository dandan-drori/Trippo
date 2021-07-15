<template>
	<section class="stay-checkout">
		<section class="checkout-header">
			<p>
				<span class="price">${{ price }}</span>
				/ night
			</p>
			<p>
				<i class="el-icon-star-on"></i>
				<span>{{ avg }}</span>
				<span>({{ reviews.length }} reviews)</span>
			</p>
		</section>
		<section class="pickers">
			<div class="block">
				<el-date-picker
					v-model="dates"
					type="daterange"
					range-separator="To"
					start-placeholder="Check-in"
					end-placeholder="Checkout"
				>
				</el-date-picker>
			</div>
		</section>
		<button ref="myBtn">
			<span>Check availabilty</span>
		</button>
		<section v-if="dates">
			<div>
				<p>You won't be charged yet</p>
				<div class="charges">
					<p>Accomodation</p>
					<p>some price</p>
				</div>
				<div class="charges">
					<p>Service fee</p>
					<p>some lower price</p>
				</div>
			</div>
			<div class="charges">
				<p>Total</p>
				<p>some high af price</p>
			</div>
		</section>
	</section>
</template>

<script>
export default {
	props: { reviews: Array, price: Number },
	data() {
		return {
			shortcuts: [
				{
					text: 'Last week',
					value: (() => {
						const end = new Date()
						const start = new Date()
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
						return [start, end]
					})(),
				},
				{
					text: 'Last month',
					value: (() => {
						const end = new Date()
						const start = new Date()
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
						return [start, end]
					})(),
				},
				{
					text: 'Last 3 months',
					value: (() => {
						const end = new Date()
						const start = new Date()
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
						return [start, end]
					})(),
				},
			],
			dates: '',
		}
	},
	computed: {
		avg() {
			const sum = this.reviews.reduce((acc, review) => {
				return acc + review.rate
			}, 0)
			return (sum / this.reviews.length).toFixed(1)
		},
	},
	mounted() {
		this.$refs.myBtn.onmousemove = e => {
			const x = e.pageX - e.target.offsetLeft
			const y = e.pageY - e.target.offsetTop

			e.target.style.setProperty('--x', `${x}px`)
			e.target.style.setProperty('--y', `${y}px`)
		}
	},
}
</script>

<style></style>
