<template>
  <div class="app main-layout">
    <app-header
      @login="login"
      @toggleSignUp="toggleSignUp"
      @logout="logout"
      :class="{ scrolled: isScrolled }"
    />
    <router-view @login="login" @scrolled="scrolled" />
    <app-footer />
    <login @login="login" v-if="isLoginOpen" />
    <signup @signUp="signUp" v-if="isSignupOpen" @toggleSignUp="toggleSignUp" />
    <div v-if="isLoginOpen || isSignupOpen" class="screen"></div>
    <!-- <user-msg /> -->
  </div>
</template>

<script>
import appHeader from './cmps/app-header.vue';
import appFooter from './cmps/app-footer.vue';
import userMsg from './cmps/user-msg.vue';
import login from './cmps/login.vue';
import signup from './cmps/signup.vue';
export default {
  data() {
    return {
      isScrolled: false,
      isLoginOpen: false,
      isSignupOpen: false,
    };
  },
  methods: {
    scrolled(value) {
      this.isScrolled = value;
    },
    login(value) {
      this.isLoginOpen = value;
    },
    signUp(userCred) {
      console.log(userCred, 'userCred');
      this.$store.dispatch({ type: 'signup', userCred });
    },

    toggleSignUp(val) {
      this.isSignupOpen = val;
    },
    logout() {
      this.$store.dispatch({ type: 'logout' });
    },
  },
  components: {
    appHeader,
    appFooter,
    userMsg,
    login,
    signup,
  },
};
</script>
