<template>
  <section class="login-modal" @click.stop>
    <div class="login-header">
      <button @click="close">
        <span class="material-icons">
          close
        </span>
      </button>
      <p>Log in</p>
    </div>
    <div class="login-input">
      <div class="input-txt">
        <h2>Welcome to Trippo</h2>
      </div>
      <form action="" @submit.prevent="login">
        <input
          type="text"
          placeholder="Enter email or username"
          v-model="userCred.username"
          ref="usernameInputRef"
        />
        <input
          type="password"
          placeholder="Enter password"
          v-model="userCred.password"
        />
        <button class="checkout-btn" ref="myBtn">
          <vue-loaders-ball-clip-rotate-multiple
            color="white"
            v-if="isLoading"
            style="height:23px; top:-7px;"
          />
          <span v-else>{{ loginBtnTxt }}</span>
        </button>
      </form>
    </div>
    <div class="login-divider">
      <div class="border"></div>
      <small>or</small>
    </div>
    <div class="login-socials">
      <button @click.stop="loginWithFacebook">
        <span class="material-icons" style="color:#4267B2;"> facebook </span
        >Continue with Facebook
      </button>
      <button @click.stop="loginWithGoogle">
        <img src="@/assets/imgs/svgs/google.svg" alt="" />
        Continue with Google
      </button>
      <button>
        <img src="@/assets/imgs/svgs/apple.png" alt="" />
        Continue with Apple
      </button>
      <button>
        <span class="material-icons" style="color:#000;"> phone_iphone </span
        >Continue with Phone
      </button>
    </div>
  </section>
</template>

<script>
import { showMsg } from '@/services/event-bus.service.js'
import { initFbsdk } from '@/config/facebook_oAuth.js'
export default {
  mounted() {
    initFbsdk()
  },
  data() {
    return {
      userCred: {
        username: '',
        password: '',
      },
      isLoading: false,
    }
  },
  methods: {
    async login() {
      try {
        this.isLoading = true
        await this.$store.dispatch({ type: 'login', userCred: this.userCred })
        this.isLoading = false
        showMsg('Logged in successfully')
        this.close()
      } catch (err) {
        showMsg('Logged in failed', 'error')
        console.log('err', err)
        // TODO: alert user that his credentials are incorrect
      }
    },
    loginWithGoogle() {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          var userInfo = {
            loginType: 'google',
            google: {
              auth: GoogleUser.getAuthResponse(),
              user: {
                name: GoogleUser.getBasicProfile().getName(),
                email: GoogleUser.getBasicProfile().getEmail(),
                profileImage: GoogleUser.getBasicProfile().getImageUrl(),
              },
            },
          }
          showMsg('Logged in successfully')
          // console.log('GoogleUser', GoogleUser)
          // console.log('getId', GoogleUser.getId())
          // console.log('basicprofile', GoogleUser.getBasicProfile().getName())
          // console.log('getBasicProfile', GoogleUser.getBasicProfile())
          // console.log('getAuthResponse', GoogleUser.getAuthResponse())
          // this.$store.commit('setLoginUser', userInfo)
          // router.push('/')
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    loginWithFacebook() {
      window.FB.login(response => {
        if (response && response.authResponse) {
          console.log('response', response)
          var userInfo = {
            loginType: 'fb',
            fb: {
              auth: response.authResponse,
            },
          }
          this.$store.commit('setLoginUser', userInfo)
          window.FB.api(
            `/${response.authResponse.userID}`,
            userResponse => {
              if (userResponse) {
                console.log(userResponse)
                var userInfo = {
                  loginType: 'fb',
                  fb: {
                    auth: response.authResponse,
                    user: userResponse,
                  },
                }
                this.$store.commit('setLoginUser', userInfo)
              }
            },
            this.params
          )
          router.push('/')
        }
      }, this.params)
    },
    close() {
      this.$emit('login', false)
    },
  },
  computed: {
    loginBtnTxt() {
      return 'Continue'
    },
  },
  mounted() {
    this.$refs.usernameInputRef.focus()
    this.$refs.myBtn.onmousemove = e => {
      const x = e.offsetX
      const y = e.offsetY

      e.target.style.setProperty('--x', `${x}px`)
      e.target.style.setProperty('--y', `${y}px`)
    }
  },
}
</script>
