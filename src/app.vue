<template>
  <div class="app main-layout">
    <app-header
      @login="login"
      @signup="signup"
      @logout="logout"
      :class="{ scrolled: isScrolled }"
    />
    <router-view @login="login" @scrolled="scrolled" />
    <app-footer />
    <login @login="login" v-if="isLoginOpen" />
    <signup @signup="signup" v-if="isSignupOpen" />
    <div v-if="isLoginOpen || isSignupOpen" class="screen"></div>
    <!-- <user-msg /> -->
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import userMsg from "./cmps/user-msg.vue";
import login from "./cmps/login.vue";
import signup from "./cmps/signup.vue";
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
    signup(value) {
      this.isSignupOpen = value;
    },
    logout() {
      this.$store.dispatch({ type: "logout" });
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
