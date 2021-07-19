<template>
	<section class="review-ratings">
		<div>
			<p>Cleaniness</p>
			<div class="bar">
				<div class="progress" :style="{ width: bars[0].width }"></div>
			</div>
		</div>
		<div>
			<p>Communication</p>
		</div>
		<div>
			<p>Check-In</p>
		</div>
		<div>
			<p>Accuracy</p>
		</div>
		<div>
			<p>Location</p>
		</div>
		<div>
			<p>Value</p>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			bars: [90],
		}
	},
}
</script>

<style></style>
