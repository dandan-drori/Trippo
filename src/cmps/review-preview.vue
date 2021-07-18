<template>
	<section class="review-preview">
		<section class="user">
			<img :src="review.by.imgUrl" />
			<div>
				<h2>{{ review.by.fullname }}</h2>
				<p>{{ review.at | moment('from') }}</p>
			</div>
		</section>
		<p class="txt">{{ review.txt }}</p>
	</section>
</template>

<script>
export default {
	props: {
		review: Object,
	},
}
</script>
