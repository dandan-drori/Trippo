<template>
  <div class="homepage">
    <div class="shadow"></div>
    <img class="hero" src="@/assets/imgs/home-page/hero1.jpeg" />
    <stay-filter />
    <div class="categories">
      <h2>Live anywhere</h2>
      <div class="cards-container">
        <div class="card">
          <img
            src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div class="card">
          <img
            src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div class="card">
          <img
            src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div class="card">
          <img
            src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stayFilter from "../cmps/stay-filter.vue";
export default {
  name: "Home",

  components: {
    stayFilter,
  },
};
</script>
