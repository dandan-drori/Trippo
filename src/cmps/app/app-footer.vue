<template>
	<footer>
		<ul class="left">
			<li>
				© 2021 Trippo, Inc.
			</li>
			<li>
				<router-link to="/stay">
					Explore
				</router-link>
			</li>
			<li>
				About us
			</li>
			<li>
				<router-link :to="'/profile/' + userId">
					Profile
				</router-link>
			</li>
		</ul>

		<ul class="right">
			<li class="lang">
				<span class="material-icons">
					language
				</span>
				<small>
					English (US)
				</small>
			</li>
			<li class="coin">
				<span>
					$
				</span>
				<small>
					USD
				</small>
			</li>
			<li>
				<font-awesome-icon class="icon" :icon="facebook" />
			</li>
			<li>
				<font-awesome-icon class="icon" :icon="twitter" />
			</li>
			<li>
				<font-awesome-icon class="icon" :icon="instagram" />
			</li>
		</ul>
	</footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default {
	data() {
		return {
			facebook: faFacebookF,
			twitter: faTwitter,
			instagram: faInstagram,
		}
	},
	computed: {
		userId() {
			const user = this.$store.getters.loggedinUser
			if (user) return user._id
			return ''
		},
	},
	components: {
		FontAwesomeIcon,
	},
}
</script>
