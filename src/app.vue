<template>
	<div class="app main-layout">
		<app-header
			@toggleProfile="toggleProfile"
			:class="{
				scrolled: isScrolled,
				hide: isSearchShown,
			}"
		/>
		<router-view
			@login="login"
			@scrolled="scrolled"
			@screen="toggleScreen"
			:isScreenOpen="isScreenOpen"
			@hideSearch="hideSearch"
		/>
		<app-footer />
		<div v-if="isLoginOpen || isSignupOpen || isScreenOpen" class="screen"></div>
		<profile-menu
			@login="login"
			@toggleSignUp="toggleSignUp"
			@logout="logout"
			@closeModal="closeModal"
			:isProfileModalOpen="isProfileModalOpen"
		/>
		<login @login="login" v-if="isLoginOpen" />
		<signup @signUp="signUp" v-if="isSignupOpen" @toggleSignUp="toggleSignUp" />
		<user-msg />
	</div>
</template>

<script>
import appHeader from './cmps/app/app-header.vue'
import appFooter from './cmps/app/app-footer.vue'
import userMsg from './cmps/app/user-msg.vue'
import login from './cmps/app/login.vue'
import signup from './cmps/app/signup.vue'
import profileMenu from './cmps/profile/profile-menu.vue'
import { showMsg } from '@/services/event-bus.service'
export default {
	data() {
		return {
			isScrolled: false,
			isProfileModalOpen: false,
			isSearchShown: false,
			isScreenOpen: false,
			isLoginOpen: false,
			isSignupOpen: false,
			headerClicked: true,
		}
	},
	created() {
		window.addEventListener('click', this.bodyClick)
	},
	methods: {
		scrolled(val) {
			this.isScrolled = val
		},
		login(val) {
			this.isLoginOpen = val
		},
		async signUp(userCred) {
			try {
				await this.$store.dispatch({ type: 'signup', userCred })
				showMsg('Signed up successfully!')
			} catch (err) {
				showMsg('Sign up failed!', 'error')
			}
		},
		toggleSignUp(val) {
			this.isSignupOpen = val
		},
		toggleProfile() {
			this.isProfileModalOpen = !this.isProfileModalOpen
		},
		async logout() {
			try {
				await this.$store.dispatch({ type: 'logout' })
				// this.$router.push('/');
				showMsg('Logged out!')
			} catch (err) {
				showMsg('Logout failed!', 'error')
			}
		},
		closeModal(val) {
			this.isProfileModalOpen = val
		},
		hideSearch(val) {
			this.isSearchShown = val
		},
		bodyClick() {
			this.isLoginOpen = false
			this.isSignupOpen = false
			this.isProfileModalOpen = false
			this.isScreenOpen = false
		},
		toggleScreen(val) {
			this.isScreenOpen = val
		},
	},
	components: {
		appHeader,
		appFooter,
		userMsg,
		login,
		signup,
		profileMenu,
	},
	// test push comment
}
</script>
