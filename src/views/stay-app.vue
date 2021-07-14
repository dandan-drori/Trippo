<template>
	<h1>hello</h1>
</template>

<script>
export default {
	data() {
		return {
			stays: null,
		}
	},
	async created() {
		const stays = await this.$store.dispatch({ type: 'loadStays' })
		console.log('stays', stays)
		this.stays = stays
	},
}
</script>

<style></style>
