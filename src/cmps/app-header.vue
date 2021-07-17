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
          <!-- <img src="../assets/imgs/user_pic-50x50.png" alt="" /> -->
          <img
            class="user-img"
            src="../assets/imgs/userImgs/host4.jpg"
            alt=""
          />
        </div>
        <div v-if="isProfileModalOpen" class="profile-menu" @click="closeModal">
          <router-link to="/profile/u101">
            <span>Profile</span>
          </router-link>
          <button @click="login">Login</button>
          <button @click="signup">Signup</button>
          <button @click="addStay">Host your home</button>
          <button @click="logout">Logout</button>
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
      isProfileModalOpen: false,
    };
  },
  methods: {
    closeModal() {
      this.isProfileModalOpen = false;
    },
    login() {
      this.$emit("login", true);
    },
    signup() {
      this.$emit("signup", true);
    },
    toggleProfile() {
      this.isProfileModalOpen = !this.isProfileModalOpen;
    },
    logout() {
      console.log("need to add this function");
    },
    addStay() {
      console.log("need to add this function");
    },
  },
  components: { FontAwesomeIcon },
};
</script>

<style></style>
