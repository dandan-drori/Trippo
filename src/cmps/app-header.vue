<template>
  <header>
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
      <div class="header-controls">
        <router-link to="/stay/edit">Become a host</router-link>
        <button class="i18n">
          <span class="material-icons">
            language
          </span>
        </button>
        <div @click="toggleProfile" class="profile-btn">
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
export default {
  data() {
    return {
      airbnb: faAirbnb,
    };
  },
  methods: {
    login() {
      this.$emit("login", true);
    },
    toggleSignUp() {
      this.$emit("toggleSignUp", true);
    },
    logout() {
      this.$emit("logout");
    },
    addStay() {
      console.log("need to add this function");
    },
    toggleProfile() {
      this.$emit("toggleProfile");
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
        return "http://res.cloudinary.com/dandan-img-cloud/image/upload/v1626521972/johtdlkck2tptcawkglt.png";
      }
    },
  },
  components: { FontAwesomeIcon },
};
</script>

<style></style>
