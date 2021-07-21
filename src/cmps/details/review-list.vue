<template>
	<section class="review-list" v-if="isShowMore">
		<review-preview v-for="review in reviews" :key="review.id" :review="review" />
		<button class="show-more" @click="toggleShowMore">Show Less</button>
	</section>
	<section class="review-list" v-else>
		<review-preview v-for="review in cutReviews" :key="review.id" :review="review" />
		<button class="show-more" @click="toggleShowMore">Show More</button>
	</section>
</template>

<script>
import reviewPreview from './review-preview'

export default {
	components: { reviewPreview },
	props: { reviews: Array },
	data() {
		return {
			cutReviews: this.reviews.slice(0, 6),
			isShowMore: false,
		}
	},
	methods: {
		toggleShowMore() {
			this.isShowMore = !this.isShowMore
		},
	},
}
</script>
