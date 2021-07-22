<template>
  <section class="dashboard-container">
    <h2>User Dashboard</h2>

    <h3>Bar chart header</h3>
    <bar-chart class="chart" :totalEarnings="totalEarnings" />
  </section>
</template>

<script>
import barChart from './bar-chart.vue'
export default {
  components: { barChart },
  props: { orders: Array, stays: Array, totalEarnings: Array },
  created() {},
  computed: {},
  methods: {},
}
</script>
