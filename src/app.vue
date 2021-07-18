<template>
  <div class="app main-layout">
    <app-header
      @toggleProfile="toggleProfile"
      :class="{ scrolled: isScrolled, hideSearch: isSearchShown }"
    />
    <router-view
      @login="login"
      @scrolled="scrolled"
      @screen="toggleScreen"
      :isScreenOpen="isScreenOpen"
      @hideSearch="hideSearch"
    />
    <app-footer />
    <login @login="login" v-if="isLoginOpen" />
    <signup @signUp="signUp" v-if="isSignupOpen" @toggleSignUp="toggleSignUp" />
    <div
      v-if="isLoginOpen || isSignupOpen || isScreenOpen"
      class="screen"
    ></div>
    <profile-menu
      @login="login"
      @toggleSignUp="toggleSignUp"
      @logout="logout"
      @closeModal="closeModal"
      :isProfileModalOpen="isProfileModalOpen"
    />
    <user-msg />
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import userMsg from "./cmps/user-msg.vue";
import login from "./cmps/login.vue";
import signup from "./cmps/signup.vue";
import ProfileMenu from "./cmps/profile-menu.vue";
import { showMsg } from "./services/event-bus.service";
export default {
  data() {
    return {
      isScrolled: false,
      isLoginOpen: false,
      isSignupOpen: false,
      isProfileModalOpen: false,
      isSearchShown: false,
      isScreenOpen: false,
    };
  },
  created() {
    window.addEventListener("click", this.bodyClick);
  },
  methods: {
    scrolled(value) {
      this.isScrolled = value;
    },
    login(value) {
      this.isLoginOpen = value;
    },
    signUp(userCred) {
      console.log(userCred, "userCred");
      this.$store.dispatch({ type: "signup", userCred });
    },
    toggleSignUp(val) {
      this.isSignupOpen = val;
    },
    toggleProfile() {
      this.isProfileModalOpen = !this.isProfileModalOpen;
    },
    logout() {
      this.$store.dispatch({ type: "logout" });
    },
    closeModal(val) {
      this.isProfileModalOpen = val;
    },
    hideSearch(val) {
      this.isSearchShown = val;
    },
    bodyClick() {
      this.isLoginOpen = false;
      this.isSignupOpen = false;
      this.isProfileModalOpen = false;
      this.isScreenOpen = false;
    },
    toggleScreen(val) {
      this.isScreenOpen = val;
    },
  },
  components: {
    appHeader,
    appFooter,
    userMsg,
    login,
    signup,
    ProfileMenu,
  },
};
</script>
