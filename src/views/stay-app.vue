<template>
	
	<stay-list :stays="stays" v-if="stays"/>
</template>

<script>
import stayList from '@/cmps/stay-list'
export default {
	components:{
		stayList,
	},
	
	computed:{
	stays(){
			return this.$store.getters.stays
		}
	},
	async created() {
	 await this.$store.dispatch({ type: 'loadStays' })
		
		
	},
}
</script>

<style></style>
