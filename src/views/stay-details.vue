<template>
	<section class="stay-details">
		<section v-if="stay">
			<section class="header">
				<section class="details">
					<h2>{{ stay.name }}</h2>
					<p>
						<span v-if="reviewsLength">
							<i class="el-icon-star-on"></i>
							5.0
							<span class="details-reviews">({{ reviewsLength }} reviews)</span>
							&middot;
						</span>
						<span class="details-location">{{ address }}</span>
					</p>
				</section>
				<section class="actions">
					<div class="share">
						<i class="el-icon-upload2"></i>
						<button>Share</button>
					</div>
					<div class="save">
						<svg
							viewBox="0 0 32 32"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							role="presentation"
							focusable="false"
							style="display: block; fill: none; height: 20px; width: 20px; stroke: currentcolor; stroke-width: 2; overflow: visible;"
						>
							<path
								d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
							></path>
						</svg>
						<button>Save</button>
					</div>
				</section>
			</section>
			<section class="images">
				<img
					:src="require('@/assets/imgs/stays/' + stay.loc.countryCode + '/1/' + stay.imgUrls[0])"
				/>
				<section class="secondary">
					<img
						:src="require('@/assets/imgs/stays/' + stay.loc.countryCode + '/1/' + stay.imgUrls[1])"
					/>
					<img
						:src="require('@/assets/imgs/stays/' + stay.loc.countryCode + '/1/' + stay.imgUrls[2])"
					/>
					<img
						:src="require('@/assets/imgs/stays/' + stay.loc.countryCode + '/1/' + stay.imgUrls[3])"
					/>
					<img
						:src="require('@/assets/imgs/stays/' + stay.loc.countryCode + '/1/' + stay.imgUrls[4])"
					/>
				</section>
			</section>
			<section class="flex-container">
				<section class="stay-info">
					<section class="info-header">
						<div>
							<h2>{{ infoHeader }}</h2>
							<span
								>{{ stay.accommodates }} guests &middot; {{ stay.propertyType }} &middot;
								{{ beds }} &middot; {{ baths }}</span
							>
						</div>
						<img src="@/assets/imgs/userImgs/host1.jpg" alt="" />
					</section>
					<section class="info-about">
						<h2>All about {{ stay.host.fullName }}'s place</h2>
						<p>{{ stay.summary + '.' }}</p>
					</section>
					<section class="amenities">
						<h2>What this place offers</h2>
						<section>
							<article v-for="(amenity, idx) in stay.amenities" :key="idx">
								<font-awesome-icon v-if="amenity.fa" :icon="icons[amenity.icon]" />
								<i v-else :class="amenity.icon"></i>
								{{ amenity.txt }}
							</article>
						</section>
					</section>
				</section>
				<stay-checkout
					:price="stay.price"
					:reviews="stay.reviews"
					:accommodates="stay.accommodates"
					@checkout="checkout"
				/>
			</section>
			<review-list :reviews="stay.reviews" />
			<stay-map :loc="stay.loc" />
			<section class="host-info">
				<section class="host-info-header">
					<img src="@/assets/imgs/userImgs/host1.jpg" alt="" />
					<div>
						<h2>Hosted by {{ stay.host.fullName }}</h2>
						<p>Joined in December 2014</p>
					</div>
				</section>
				<section class="badges">
					<i class="el-icon-star-on"></i>
					<p>23 Reviews</p>
					<p>
						<font-awesome-icon :icon="icons.userShield" />
						Identity verified
					</p>
				</section>
				<section class="host-details">
					<p>Response rate: 86%</p>
					<p>Response time: within an hour</p>
					<button>Contact host</button>
					<div class="details-alert">
						<font-awesome-icon :icon="icons.shieldAlt" />
						<small>
							To protect your payment, never transfer money or communicate outside of the Trippo
							website or app.</small
						>
					</div>
				</section>
			</section>
		</section>
		<h2 v-else>Loading...</h2>
	</section>
</template>

<script>
import { stayService } from '@/services/stay-service.js'
import { orderService } from '@/services/order-service.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faWifi,
	faPaw,
	faShower,
	faSnowflake,
	faUserShield,
	faShieldAlt,
} from '@fortawesome/free-solid-svg-icons'
import reviewList from '../cmps/review-list'
import stayMap from '../cmps/stay-map'
import stayCheckout from '../cmps/stay-checkout'

export default {
	components: { FontAwesomeIcon, reviewList, stayMap, stayCheckout },
	data() {
		return {
			stay: null,
			icons: {
				wifi: faWifi,
				paw: faPaw,
				shower: faShower,
				snowflake: faSnowflake,
				userShield: faUserShield,
				shieldAlt: faShieldAlt,
			},
		}
	},
	computed: {
		address() {
			return this.stay.loc.countryCode === 'NY'
				? this.stay.loc.address + ', United States'
				: this.stay.loc.address
		},
		reviewsLength() {
			return this.stay.reviews.length
		},
		infoHeader() {
			return this.stay.propertyType + ' host by ' + this.stay.host.fullName
		},
		beds() {
			return this.stay.accommodates === 1
				? this.stay.accommodates + ' bed'
				: this.stay.accommodates + ' beds'
		},
		baths() {
			return this.stay.accommodates === 1
				? this.stay.accommodates + ' bath'
				: this.stay.accommodates + ' baths'
		},
	},
	methods: {
		checkout({ dates, total, guests }) {
			const orderToSave = orderService.getEmptyOrder()
			orderToSave.startDate = dates[0].getTime()
			orderToSave.endDate = dates[1].getTime()
			orderToSave.total = total
			orderToSave.guests = guests
			this.$store.dispatch({ type: 'saveOrder', order: orderToSave, stay: this.stay })
			this.$store.dispatch({ type: 'loadOrders' })
		},
	},
	async created() {
		try {
			this.$emit('scrolled', true)
			this.$store.dispatch({ type: 'loadOrders' })
			const { stayId } = this.$route.params
			const stay = await stayService.getById(stayId)
			this.stay = stay
		} catch (err) {
			console.log('Cannot get stay with id:', stayId)
		}
	},
}
</script>
