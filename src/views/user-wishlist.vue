<template>
  <section class="user-wishlist-container" v-if="stays">
    <h2>Wishlist</h2>
    <wishlist :stays="stays" />
  </section>
</template>

<script>
import wishlist from '@/cmps/list/wishlist-list.vue'
export default {
  components: { wishlist },
  props: {},
  data() {
    return {}
  },
  computed: {
    stays() {
      return this.$store.getters.stays
    },
  },
  methods: {},
  async created() {
    this.$emit('scrolled', true)
    this.$emit('hideSearch', true)
    await this.$store.dispatch({ type: 'loadStays' })
  },
}
</script>
