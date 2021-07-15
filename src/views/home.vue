<template>
	<div class="homepage">
		<div class="shadow"></div>
		<div class="hero-container"></div>
		<img class="hero" src="@/assets/imgs/home-page/hero1.jpeg" />
		<stay-filter :class="{ scrolled: this.isScrolled }" />
		<div class="flexible">
			<p>Not sure where to go? Perfect.</p>
			<button><span>I’m flexible</span></button>
		</div>
		<div class="categories">
			<h2>Live anywhere</h2>
			<div class="cards-container">
				<div class="card">
					<router-link :to="'/stay/q/' + 'Paris'">
						<div class="img">
							<img
								src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
								alt=""
							/>
						</div>
						<h3>Paris</h3>
					</router-link>
				</div>
				<div class="card">
					<router-link :to="'/stay/q/' + 'New York'">
						<div class="img">
							<img
								src="https://images.unsplash.com/photo-1605617697069-959ec9dfc9de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1119&q=80"
								alt=""
							/>
						</div>
						<h3>New York</h3>
					</router-link>
				</div>
				<div class="card">
					<router-link :to="'/stay/q/' + 'Amsterdam'">
						<div class="img">
							<img
								src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
								alt=""
							/>
						</div>
						<h3>Amsterdam</h3>
					</router-link>
				</div>
				<div class="card">
					<router-link :to="'/stay/q/' + 'London'">
						<div class="img">
							<img
								src="https://images.unsplash.com/photo-1587726480710-003743795e40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=851&q=80"
								alt=""
							/>
						</div>
						<h3>London</h3>
					</router-link>
				</div>
			</div>
			<div class="wide-card">
				<div class="desc">
					<h3>The Greatest <span>Outdoors</span></h3>
					<p>Wishlists curated by Airbnb.</p>
					<button>Get inspired</button>
				</div>
				<img src="@/assets/imgs/outdoors.webp" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
import stayFilter from '../cmps/stay-filter.vue'
export default {
	data() {
		return {
			isScrolled: false,
		}
	},
	name: 'Home',
	created() {
		window.addEventListener('scroll', this.handleScroll)
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll(event) {
			let scrollDiff = event.path[1].scrollY
			if (scrollDiff >= 1) {
				this.isScrolled = true
				this.$emit('scrolled', true)
			} else if (scrollDiff < 1) {
				this.isScrolled = false
				this.$emit('scrolled', false)
			}
		},
	},
	computed: {
		filterBy() {
			return this.$store.getters.filterBy
		},
	},
	components: {
		stayFilter,
	},
}
</script>

<style lang="scss">
input.el-input__inner {
	font-size: 0.9rem;
}

.el-input__icon {
	display: none;
}

.homepage {
	& .block.date.home {
		position: absolute !important;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		height: 2.45rem;
		outline: none;
		background-color: transparent;
	}

	& #date {
		width: 66%;
		max-width: 850px;
		border-radius: 1.6rem;
		left: 50% !important;
		top: 0 !important;
		transform: translate(-50%, 31%) !important;
		padding: 1rem;
		color: #000;
		&:hover {
			color: #000;
		}
		& span {
			color: #000000;
			height: 45px;
			width: 45px;
			display: flex;
			align-items: center;
			align-content: center;
			justify-content: center;
		}
		& td div {
			display: flex;
			align-items: center;
			align-content: center;
			justify-content: center;
			max-width: 60px;
			height: 45px !important;
		}
	}
	& .el-date-editor,
	& .el-range-editor,
	& .el-input__inner,
	& .el-date-editor--daterange {
		height: 20px;
		justify-content: flex-start;
		background-color: transparent;
		border: none;

		& .el-input__icon.el-range__close-icon {
			display: none;
		}
	}

	.el-date-editor .el-range-separator {
		width: 68px;
	}

	& input {
		&.el-range-input {
			width: 100px;
			height: 20px;
			font-size: 0.8rem;
			line-height: 20px;
			background-color: transparent;
			text-align: left !important;
		}
	}

	& .block.date:hover {
		background-color: transparent;
	}

	& .el-date-table td.end-date span,
	& .el-date-table td.start-date span {
		background-color: #222;
		color: #fff !important;
		font-weight: 500;
		font-size: 0.7rem;
	}

	.el-date-table td.in-range div,
	.el-date-table td.in-range div:hover,
	.el-date-table.is-week-mode .el-date-table__row.current div,
	.el-date-table.is-week-mode .el-date-table__row:hover div {
		background-color: #eeeeee !important;
	}

	& .el-date-editor--daterange.el-input,
	& .el-date-editor--daterange.el-input__inner,
	& .el-date-editor--timerange.el-input,
	& .el-date-editor--timerange.el-input__inner {
		width: 100%;
		border: none;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		height: 20px;
	}

	& td {
		height: 45px !important;
		width: 45px !important;
	}

	& .popper__arrow {
		left: 35% !important;
	}
}
</style>
