<template>
	<section>
		<stay-list-filter
			v-if="stays && unfilteredStays"
			:filterBy="filterBy"
			:stays="stays"
			@filter="setFilter"
			:unfilteredStays="unfilteredStays"
		/>
		<stay-list :stays="stays" v-if="stays" />
	</section>
</template>

<script>
import stayList from '@/cmps/stay-list'
import stayListFilter from '@/cmps/stay-list-filter'

export default {
	components: {
		stayList,
		stayListFilter,
	},
	data() {
		return {}
	},
	methods: {
		setFilter(filterBy) {
			console.log(filterBy)
			this.$store.commit({ type: 'setFilter', filterBy })
			this.$store.dispatch({ type: 'loadStays' })
		},
	},
	computed: {
		stays() {
			return this.$store.getters.stays
		},
		filterBy() {
			return this.$store.getters.filterBy
		},
		unfilteredStays() {
			return this.$store.getters.unfilteredStays
		},
	},
	async created() {
		const { city } = this.$route.params
		var filterBy = this.$store.getters.filterBy
		filterBy.city = city
		this.$store.commit({ type: 'setFilter', filterBy })
		await this.$store.dispatch({ type: 'loadStays' })
		await this.$store.dispatch({ type: 'loadUnfilteredStays' })
	},
}
</script>

<style></style>
