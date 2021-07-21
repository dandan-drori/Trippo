<script>
import { Line } from 'vue-chartjs'
import { utilService } from '@/services/util-service.js'
export default {
	extends: Line,
	props: { orders: Array, stays: Array },
	data() {
		return {
			chartdata: {
				labels: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec',
				],
				datasets: this.stays
					.map((stay, idx) => {
						if (stay.host._id === this.$store.getters.loggedinUser._id) {
							return {
								label: stay.name,
								data: this.orders
									.map(order => (order.stay._id === stay._id ? order?.total : undefined))
									.filter(t => t),
								fill: false,
								borderColor: utilService.getPredefinedColor(idx),
								tension: 0.1,
							}
						}
					})
					.filter(s => s),
			},
		}
	},

	// datasets: [
	// 	{
	// 		label: 'Stay 1',
	// 		fill: false,
	// 		borderColor: 'rgb(47, 109, 242)',
	// 		tension: 0.1,
	// 	},
	// 	{
	// 		label: 'Stay 2',
	// 		data: [4600, 4500, 3700, 5500, 4900, 5700, 7000, 7100, 6600, 7900, 8300, 9000],
	// 		fill: false,
	// 		borderColor: '#39d626',
	// 		tension: 0.1,
	// 	},
	// 	{
	// 		label: 'Stay 3',
	// 		data: [3600, 3500, 2700, 4500, 3900, 4700, 6000, 6100, 5600, 6900, 7300, 8000],
	// 		fill: false,
	// 		borderColor: '#d64f26',
	// 		tension: 0.1,
	// 	},
	// ],
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

	mounted() {
		this.renderChart(this.chartdata, this.options)
	},
}
</script>
