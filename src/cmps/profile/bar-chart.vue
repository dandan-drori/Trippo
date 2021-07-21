<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          label: 'Total ernings',
          data: [
            5600 * 3,
            5500 * 3,
            4700 * 3,
            6500 * 3,
            5900 * 3,
            6700 * 3,
            8000 * 3,
            8100 * 3,
            7600 * 3,
            8900 * 3,
            9300 * 3,
            10000 * 3,
          ],
          fill: false,
          borderColor: 'rgb(47, 109, 242)',
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options)
  },
}
</script>
