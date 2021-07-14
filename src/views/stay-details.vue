<template>
	<section class="stay-details">
		<section v-if="stay">
			<section class="header">
				<section class="details">
					<h2>details</h2>
					<p>
						* 5.0
						<span class="details-reviews">(3 reviews)</span>
						&middot;
						<span class="details-location">Tel Aviv-Yafo, Tel Aviv District, Israel</span>
					</p>
				</section>
				<section class="actions">
					<button>Share</button>
					<button>Save</button>
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
							<h2>Entire apartment host by Miriam</h2>
							<span>2 guests &middot; Studio &middot; 1 bed &middot; 1 bath</span>
						</div>
						<!-- <img src="hostImg.jpg" alt=""> -->
					</section>
					<section class="info-about">
						<h2>All about Miriam's place</h2>
						<p>
							Guests enjoy weekly maid & laundry in-residence w/ gorgeous new kitchen, granite
							countertop workspace, floor-to-ceiling marble bathroom, and dark hardwood floors
							throughout.
						</p>
						<p>
							All in a smart-access, uber-secure building equipped with ultra high-speed fiberoptic
							wifi (1,000 Mbps) located next to museums and Central Park.
						</p>
						<h4>Other things to note</h4>
						<p>
							Pet friendly so long as details are approved and booked as 'Guest' in the reservation.
						</p>
					</section>
					<section class="amenities">
						<h2>What this place offers</h2>
						<section>
							<article v-for="(amenity, idx) in stay.amenities" :key="idx">
								{{ amenity }}
							</article>
						</section>
					</section>
				</section>
				<section class="checkout-container">
					<section class="checkout">
						<p>
							<span class="price">$50</span>
							/ night
						</p>
						<p>
							*
							<span>5.0</span>
						</p>
						<section class="pickers">
							<p>check-in</p>
							<p>check-out</p>
							<p>guests</p>
						</section>
						<button>Check availabilty</button>
					</section>
				</section>
			</section>
			<section class="details-reviews">
				<h2>review cmp!!!</h2>
			</section>
			<section class="details-map">
				<h2>map cmp!!!</h2>
			</section>
			<section class="city description">
				<h2>City Description...</h2>
			</section>
			<section class="host-info">
				<section class="host-info-header">
					<!-- <img src="hostImg.jpg" alt=""> -->
					<h2>Hosted by Miriam</h2>
					<p>Joined in December 2014</p>
				</section>
				<section class="badges">
					<p>* 1 Review</p>
					<p>Identity verified</p>
				</section>
				<section class="host-details">
					<p>Response rate: 100%</p>
					<p>Response time: within an hour</p>
					<button>Contact host</button>
					<small
						>To protect your payment, never transfer money or communicate outside of the Airbnb
						website or app.</small
					>
				</section>
			</section>
		</section>
		<h2 v-else>Loading...</h2>
	</section>
</template>

<script>
import { stayService } from '@/services/stay-service.js'

export default {
	data() {
		return {
			stay: null,
			url: 'logo.png',
		}
	},
	async created() {
		try {
			const { stayId } = this.$route.params
			const stay = await stayService.getById(stayId)
			this.stay = stay
		} catch (err) {
			console.log('Cannot get stay with id:', stayId)
		}
	},
}
</script>
