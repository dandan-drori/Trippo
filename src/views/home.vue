<template>
  <div class="homepage">
    <div class="shadow"></div>
    <div class="hero-container"></div>
    <img class="hero" src="@/assets/imgs/home-page/hero1.jpeg" />
    <stay-filter />
    <div class="flexible">
      <p>Not sure where to go? Perfect.</p>
      <button><span>I’m flexible</span></button>
    </div>
    <div class="categories">
      <h2>Live anywhere</h2>
      <div class="cards-container">
        <div class="card">
          <router-link to="/stay">
            <div class="img">
              <img
                src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </div>
            <h3>Paris</h3>
          </router-link>
        </div>
        <div class="card">
          <router-link to="/stay">
            <div class="img">
              <img
                src="https://images.unsplash.com/photo-1605617697069-959ec9dfc9de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1119&q=80"
                alt=""
              />
            </div>
            <h3>New York</h3>
          </router-link>
        </div>
        <div class="card">
          <router-link to="/stay">
            <div class="img">
              <img
                src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </div>
            <h3>Amsterdam</h3>
          </router-link>
        </div>
        <div class="card">
          <router-link to="/stay">
            <div class="img">
              <img
                src="https://images.unsplash.com/photo-1587726480710-003743795e40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=851&q=80"
                alt=""
              />
            </div>
            <h3>London</h3>
          </router-link>
        </div>
      </div>
      <div class="wide-card">
        <div class="desc">
          <h3>The Greatest <span>Outdoors</span></h3>
          <p>Wishlists curated by Airbnb.</p>
          <button>Get inspired</button>
        </div>
        <img src="@/assets/imgs/outdoors.webp" alt="" />
      </div>
    </div>
    <footer>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque sed
        fugiat, quo, consectetur rerum minus eos obcaecat
      </p>
    </footer>
  </div>
</template>

<script>
import stayFilter from "../cmps/stay-filter.vue";
export default {
  data() {
    return {};
  },
  name: "Home",
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      let scrollDiff = event.path[1].scrollY;
      if (scrollDiff >= 1) {
        this.$emit("scrolled", true);
      } else if (scrollDiff < 1) {
        this.$emit("scrolled", false);
      }
    },
  },
  components: {
    stayFilter,
  },
};
</script>
