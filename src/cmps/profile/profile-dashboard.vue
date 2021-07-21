<template>
  <section class="dashboard-container">
    <h2>User Dashboard</h2>
    <h3>Line chart header</h3>
    <line-chart class="chart" />
    <h3>Bar chart header</h3>
    <bar-chart class="chart" />
  </section>
</template>

<script>
import lineChart from './line-chart.vue'
import barChart from './bar-chart.vue'
export default {
  components: { lineChart, barChart },
  props: { orders: Array },
  created() {},
  computed: {},
  methods: {},
}
</script>
