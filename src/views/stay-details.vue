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
						<button @click.stop="toggleShare"><span>Share</span></button>
					</div>
					<div class="save">
						<svg
							viewBox="0 0 32 32"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							role="presentation"
							focusable="false"
							style="display: block; fill: none; height: 16px; width: 15px; stroke: currentcolor; stroke-width: 3; overflow: visible;"
						>
							<path
								d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
							></path>
						</svg>
						<button><span>Save</span></button>
					</div>
				</section>
			</section>
			<section class="images">
				<img :src="stay.imgUrls[0]" v-if="stay.imgUrls[0]" />
				<img v-else :src="require('@/assets/imgs/no_img.jpeg')" alt="" />
				<section class="secondary">
					<img :src="stay.imgUrls[1]" v-if="stay.imgUrls[1]" />
					<img v-else :src="require('@/assets/imgs/no_img.jpeg')" alt="" />
					<img :src="stay.imgUrls[2]" v-if="stay.imgUrls[2]" />
					<img v-else :src="require('@/assets/imgs/no_img.jpeg')" alt="" />
					<img :src="stay.imgUrls[3]" v-if="stay.imgUrls[3]" />
					<img v-else :src="require('@/assets/imgs/no_img.jpeg')" alt="" />
					<img :src="stay.imgUrls[4]" v-if="stay.imgUrls[4]" />
					<img v-else :src="require('@/assets/imgs/no_img.jpeg')" alt="" />
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
						<img :src="stay.host.imgUrl" alt="" />
					</section>
					<section class="info-about">
						<h2>All about {{ stay.host.fullname }}'s place</h2>
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
			<review-ratings :reviews="stay.reviews" />
			<el-button v-if="loggedInUser" @click.stop="toggleReview">Add Review</el-button>
			<review-add v-if="isScreenOpen" @add-review="onAddReview" @toggle-review="toggleReview" />
			<review-list v-if="stay.reviews.length" :reviews="stay.reviews" />
			<section v-else class="no-reviews">
				<h2>No reviews (yet)</h2>
			</section>
			<stay-map :loc="stay.loc" />
			<section class="host-info">
				<div class="left">
					<section class="host-info-header">
						<img :src="stay.host.imgUrl" alt="" />
						<div>
							<h2>Hosted by {{ stay.host.fullname }}</h2>
							<p>Joined in December 2014</p>
						</div>
					</section>
					<section class="badges">
						<p><i class="el-icon-star-on"></i>23 Reviews</p>
						<p>
							<font-awesome-icon :icon="icons.userShield" />
							Identity verified
						</p>
					</section>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae mollitia repudiandae,
						dicta rerum, consequatur molestiae quasi animi quis, repellat consequuntur in. Voluptate
						alias
					</p>
				</div>
				<div class="right">
					<section class="host-details">
						<p>Response rate: 86%</p>
						<p>Response time: within an hour</p>
						<button @click="toggleChat">Contact host</button>
						<div class="details-alert">
							<font-awesome-icon :icon="icons.shieldAlt" />
							<small>
								To protect your payment, never transfer money or communicate outside of the Trippo
								website or app.</small
							>
						</div>
					</section>
				</div>
			</section>
		</section>
		<div class="loaderTest" v-else>Loading...</div>
		<chat
			v-if="isChatOpen"
			class="chat"
			@close="toggleChat"
			:stay="stay"
			:msgHistory="stay.chatMsgs"
		/>
	</section>
</template>

<script>
import { orderService } from '@/services/order-service.js'
import { showMsg } from '@/services/event-bus.service.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faWifi,
	faPaw,
	faShower,
	faSnowflake,
	faUserShield,
	faShieldAlt,
} from '@fortawesome/free-solid-svg-icons'
import reviewList from '@/cmps/details/review-list'
import stayMap from '@/cmps/details/stay-map'
import chat from '@/cmps/details/chat'
import stayCheckout from '@/cmps/details/stay-checkout'
import reviewAdd from '@/cmps/details/review-add'
import reviewRatings from '@/cmps/details/review-ratings'

export default {
	props: { isScreenOpen: Boolean },
	components: {
		FontAwesomeIcon,
		reviewList,
		stayMap,
		stayCheckout,
		chat,
		reviewAdd,
		reviewRatings,
	},
	data() {
		return {
			// stay: null,
			isChatOpen: false,
			icons: {
				wifi: faWifi,
				paw: faPaw,
				shower: faShower,
				snowflake: faSnowflake,
				userShield: faUserShield,
				shieldAlt: faShieldAlt,
			},
			isLoading: true,
		}
	},
	computed: {
		address() {
			return this.stay.loc.countryCode === 'NY'
				? this.stay.loc.address + 'United States'
				: this.stay.loc.address
		},
		reviewsLength() {
			return this.stay.reviews.length
		},
		infoHeader() {
			return this.stay.propertyType + ' host by ' + this.stay.host.fullname
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
		loggedInUser() {
			return this.$store.getters.loggedinUser
		},
		stay() {
			return this.$store.getters.watchedStay
		},
	},
	methods: {
		async checkout({ dates, total, guests }) {
			const orderToSave = orderService.getEmptyOrder()
			orderToSave.startDate = dates[0].getTime()
			orderToSave.endDate = dates[1].getTime()
			orderToSave.total = total
			orderToSave.guests = guests
			try {
				await this.$store.dispatch({
					type: 'saveOrder',
					order: orderToSave,
					stay: this.stay,
				})
				setTimeout(() => {
					showMsg('order sent')
				}, 2000)
			} catch (err) {
				showMsg('order failed', 'error')
			}
		},
		toggleShare() {
			this.$emit('toggleShare', true)
		},
		toggleChat() {
			this.isChatOpen = !this.isChatOpen
		},
		toggleReview() {
			this.$emit('screen', !this.isScreenOpen)
		},
		async onAddReview(review) {
			try {
				const newStay = await this.$store.dispatch({
					type: 'addReview',
					stay: this.stay,
					review,
				})
				this.$store.commit({ type: 'setWatchedStay', stay: newStay })
				this.toggleReview()
				showMsg('Review added successfully')
			} catch {
				showMsg('There was a problem posting the review', 'error')
			}
		},
	},
	async created() {
		try {
			this.$emit('scrolled', true)
			// this.$store.dispatch({ type: 'loadOrders' })
			const { stayId } = this.$route.params
			await this.$store.dispatch({ type: 'loadAndWatchStay', stayId })
			// const stay = await stayService.getById(stayId)
			// this.stay = stay
		} catch (err) {
			console.log('Cannot get stay with id:', stayId)
		}
	},
}
</script>
