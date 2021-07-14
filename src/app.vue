<template>
	<div class="app main-layout">
		<app-header />
		<router-view />
	</div>
</template>

<script>
import appHeader from './cmps/app-header.vue'

export default {
	components: {
		appHeader,
	},
}
</script>
