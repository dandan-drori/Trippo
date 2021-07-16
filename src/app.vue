<template>
  <div class="app main-layout">
    <app-header @login="login" :class="{ scrolled: isScrolled }" />
    <router-view @login="login" @scrolled="scrolled" />
    <app-footer />
    <login @login="login" v-if="isLoginOpen" />
    <div v-if="isLoginOpen" class="screen"></div>
    <!-- <user-msg /> -->
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import userMsg from "./cmps/user-msg.vue";
import login from "./cmps/login.vue";
export default {
  data() {
    return {
      isScrolled: false,
      isLoginOpen: false,
    };
  },
  methods: {
    scrolled(value) {
      this.isScrolled = value;
    },
    login(value) {
      this.isLoginOpen = value;
    },
  },
  components: {
    appHeader,
    appFooter,
    userMsg,
    login,
  },
};
</script>
