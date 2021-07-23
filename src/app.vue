<template>
	<div class="app main-layout">
		<app-header
			@login="login"
			@toggleSignUp="toggleSignUp"
			@logout="logout"
			@closeModal="closeModal"
			:isProfileModalOpen="isProfileModalOpen"
			@toggleProfile="toggleProfile"
			:class="{
				scrolled: isScrolled,
				hide: isSearchShown,
			}"
		/>
		<router-view
			@login="login"
			@scrolled="scrolled"
			@bottom="bottom"
			@screen="toggleScreen"
			:isScreenOpen="isScreenOpen"
			@hideSearch="hideSearch"
			@toggleShare="toggleShare"
			@toggleLoading="toggleLoading"
		/>
		<mobile-nav :class="{ bottom: isOnBottom }" @toggleProfile="toggleProfile" @login="login" />
		<app-footer />
		<div
			v-if="isLoginOpen || isSignupOpen || isScreenOpen || isShareShown || isLoading"
			class="screen"
		></div>
		<vue-loaders-ball-pulse-sync color="transparent" class="main-loader" v-if="isLoading" />

		<login @login="login" v-if="isLoginOpen" />
		<signup v-if="isSignupOpen" @toggleSignUp="toggleSignUp" />
		<share-modal v-if="isShareShown" @toggleShare="toggleShare" :class="{ share: isShareShown }" />
		<user-msg />
	</div>
</template>

<script>
import appHeader from './cmps/app/app-header.vue'
import appFooter from './cmps/app/app-footer.vue'
import userMsg from './cmps/app/user-msg.vue'
import login from './cmps/app/login.vue'
import signup from './cmps/app/signup.vue'
import shareModal from './cmps/app/share-modal.vue'
import { showMsg } from '@/services/event-bus.service'
import mobileNav from './cmps/app/mobile-nav.vue'
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
			isShareShown: false,
			isLoading: false,
			isOnBottom: false,
			scrolledToBottom: false,
		}
	},
	created() {
		window.addEventListener('click', this.bodyClick)
	},
	mounted() {
		this.scroll()
	},
	methods: {
		scroll() {
			window.onscroll = () => {
				let bottomOfWindow =
					Math.max(
						window.pageYOffset,
						document.documentElement.scrollTop,
						document.body.scrollTop
					) +
						window.innerHeight ===
					document.documentElement.offsetHeight

<<<<<<< HEAD
				if (bottomOfWindow) {
					this.scrolledToBottom = true
					this.isOnBottom = true
					// replace it with your code
				} else {
					this.isOnBottom = false
				}
			}
		},
		scrolled(val) {
			this.isScrolled = val
		},
		bottom(val) {
			this.isOnbottom = val
		},
		login(val) {
			this.isLoginOpen = val
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
		toggleShare(val) {
			this.isShareShown = val
		},
		toggleLoading(val) {
			this.isLoading = val
		},
	},
	components: {
		appHeader,
		appFooter,
		userMsg,
		login,
		signup,
		shareModal,
		mobileNav,
	},
=======
        if (bottomOfWindow) {
          this.scrolledToBottom = true
          this.isOnBottom = true
          // replace it with your code
        } else {
          this.isOnBottom = false
        }
      }
    },
    scrolled(val) {
      this.isScrolled = val
    },
    bottom(val) {
      this.isOnbottom = val
    },
    login(val) {
      this.isLoginOpen = val
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
    toggleShare(val) {
      this.isShareShown = val
    },
    toggleLoading(val) {
      this.isLoading = val
    },
  },
  components: {
    appHeader,
    appFooter,
    userMsg,
    login,
    signup,
    shareModal,
    mobileNav,
  },
>>>>>>> 61ab7174896f1566ce97d9001d2e5db9e3aacadc
}
</script>
