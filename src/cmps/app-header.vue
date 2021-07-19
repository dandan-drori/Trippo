<template>
  <header class="main-layout">
    <div class="heder-container">
      <div class="logo">
        <router-link to="/">
          <font-awesome-icon class="icon" :icon="airbnb" />
          <h1>trippo</h1>
        </router-link>
      </div>
      <div class="header-search">
        <input type="text" placeholder="Search" />
        <button class="search-btn">
          <img src="../assets/imgs/search_white_24dp.svg" alt="" />
        </button>
      </div>
      <stay-filter
        @click.native.stop="search"
        :class="{ scrolled: this.isScrolled }"
      />
      <div class="header-controls">
        <router-link class="host" to="/stay/profile">Become a host</router-link>
        <button class="i18n">
          <span class="material-icons">
            language
          </span>
        </button>
        <div @click.stop="toggleProfile" class="profile-btn">
          <span class="material-icons">
            menu
          </span>
          <img :src="imgUrl" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import stayFilter from '../cmps/stay-filter.vue';
export default {
  data() {
    return {
      airbnb: faAirbnb,
      isScrolled: false,
      searching: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.$on('toggleScroll');
  },
  methods: {
    handleScroll(event) {
      let scrollDiff = event.path[1].scrollY;
      if (scrollDiff > 0) {
        this.isScrolled = true;
        this.$emit('scrolled', true);
        this.$emit('hideSearch', false);
      } else if (!scrollDiff) {
        this.isScrolled = false;
        this.$emit('scrolled', false);
      }
    },
    login() {
      this.$emit('login', true);
    },
    toggleSignUp() {
      this.$emit('toggleSignUp', true);
    },
    logout() {
      this.$emit('logout');
    },
    addStay() {
      console.log('need to add this function');
    },
    toggleProfile() {
      this.$emit('toggleProfile');
    },
    toggleScroll(val) {
      this.isScrolled = val;
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    imgUrl() {
      const user = this.$store.getters.loggedinUser;
      if (user && user?.imgUrl) {
        return user.imgUrl;
      } else {
        return 'http://res.cloudinary.com/dandan-img-cloud/image/upload/v1626521972/johtdlkck2tptcawkglt.png';
      }
    },
  },
  components: { FontAwesomeIcon, stayFilter },
};
</script>
