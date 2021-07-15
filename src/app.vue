<template>
  <div class="app main-layout">
    <app-header :class="{ scrolled: isScrolled }" />
    <router-view @scrolled="scrolled" />
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  methods: {
    scrolled(value) {
      this.isScrolled = value;
    },
  },
  components: {
    appHeader,
  },
};
</script>
