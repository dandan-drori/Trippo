<template>
	<section class="stay-card-container">
		<el-carousel
			v-if="stay.imgUrls.length"
			class="img-carousell"
			trigger="click"
			height="170px"
			arrow="always"
			:autoplay="false"
			:loop="true"
		>
			<el-carousel-item v-for="(imgUrl, idx) in stay.imgUrls" :key="idx">
				<img :src="imgUrl" @click="sendToDetails(stay._id)" />
			</el-carousel-item>
		</el-carousel>
		<img v-else :src="require('@/assets/imgs/no_img.jpeg')" />
		<div class="card-rating">
			<p>
				<span class="material-icons star-icon"> star </span>{{ avgRate }} (<small>
					{{ stay.reviews.length }}</small
				>)
			</p>
		</div>
		<div class="card-location">{{ stay.propertyType }} &middot; {{ city }}</div>
		<div class="card-name">{{ stay.name }}</div>
		<div class="card-price">
			<p>
				<span>${{ stay.price }}</span
				>/night
			</p>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		stay: Object,
	},
	methods: {
		sendToDetails(stayId) {
			this.$router.push(`/stay/${stayId}`)
		},
	},
	computed: {
		city() {
			switch (this.stay.loc.country) {
				case 'Netherlands':
					return 'Amsterdam'
				case 'France':
					return 'Paris'
				case 'New York':
					return 'New York'
			}
		},
		avgRate() {
			if (!this.stay.reviews.length) return 0
			const sum = this.stay.reviews.reduce((acc, review) => {
				return acc + review.rate
			}, 0)
			return (sum / this.stay.reviews.length).toFixed(1)
		},
	},
	created() {},
}
</script>

<style></style>
