<template>
	<section class="review-preview">
		<section class="user">
			<img src="@/assets/imgs/userImgs/host2.jpg" />
			<div>
				<h2>{{ review.by.fullname }}</h2>
				<p>{{ review.at | moment('from') }}</p>
			</div>
			<i class="el-icon-star-on"></i>
			<p>
				{{ review.rate }}
			</p>
		</section>
		<p>{{ review.txt }}</p>
	</section>
</template>

<script>
export default {
	props: {
		review: Object,
	},
}
</script>
