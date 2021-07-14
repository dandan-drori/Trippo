<template>
  <div class="homepage">
    <div class="shadow"></div>
    <img class="hero" src="@/assets/imgs/home-page/hero1.jpeg" />
    <stay-filter />
    <div class="categorys"></div>
  </div>
</template>

<script>
import stayFilter from "../cmps/stay-filter.vue";
export default {
  name: "Home",
  data() {},
  components: {
    stayFilter,
  },
};
</script>
