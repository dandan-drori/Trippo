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
			<div class="guests">
				<p>Guests:</p>
				<button :class="{ show: guestsCount > 1 }" @click="decGuests">
					-
				</button>
				<span class="guestsCount">{{ guestsCount }}</span>
				<button :class="{ show: guestsCount < accommodates }" @click="incGuests">+</button>
			</div>
		</section>
		<button ref="myBtn" class="checkout-btn">
			<span>{{ checkoutBtnTxt }}</span>
		</button>
		<section v-if="dates" class="reservation-data">
			<div class="charges-data">
				<small>You won't be charged yet</small>
				<div class="charges">
					<p>Accomodation</p>
					<p>some price</p>
				</div>
				<div class="charges">
					<p>Service fee</p>
					<p>some lower price</p>
				</div>
			</div>
			<div class="total">
				<p>Total</p>
				<p>some high af price</p>
			</div>
		</section>
	</section>
</template>

<script>
export default {
	props: { reviews: Array, price: Number, accommodates: Number },
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
			guestsCount: 1,
		}
	},
	computed: {
		avg() {
			const sum = this.reviews.reduce((acc, review) => {
				return acc + review.rate
			}, 0)
			return (sum / this.reviews.length).toFixed(1)
		},
		checkoutBtnTxt() {
			return this.dates ? 'Reserve' : 'Check availabilty'
		},
	},
	methods: {
		decGuests() {
			if (this.guestsCount > 1) {
				this.guestsCount--
			}
		},
		incGuests() {
			if (this.guestsCount < this.accommodates) {
				this.guestsCount++
			}
		},
	},
	mounted() {
		this.$refs.myBtn.onmousemove = e => {
			const x = e.offsetX
			const y = e.offsetY

			e.target.style.setProperty('--x', `${x}px`)
			e.target.style.setProperty('--y', `${y}px`)
		}
	},
}
</script>

<style></style>
