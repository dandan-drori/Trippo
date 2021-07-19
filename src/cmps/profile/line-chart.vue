<script>
import { Line } from 'vue-chartjs';
export default {
  extends: Line,
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
          label: 'Stay 1',
          data: [
            5600,
            5500,
            4700,
            6500,
            5900,
            6700,
            8000,
            8100,
            7600,
            8900,
            9300,
            10000,
          ],
          fill: false,
          borderColor: 'rgb(47, 109, 242)',
          tension: 0.1,
        },
        {
          label: 'Stay 2',
          data: [
            4600,
            4500,
            3700,
            5500,
            4900,
            5700,
            7000,
            7100,
            6600,
            7900,
            8300,
            9000,
          ],
          fill: false,
          borderColor: '#39d626',
          tension: 0.1,
        },
        {
          label: 'Stay 3',
          data: [
            3600,
            3500,
            2700,
            4500,
            3900,
            4700,
            6000,
            6100,
            5600,
            6900,
            7300,
            8000,
          ],
          fill: false,
          borderColor: '#d64f26',
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
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
