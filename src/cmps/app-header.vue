<template>
  <header>
    <div class="heder-container">
      <div class="logo">
        <router-link to="/">
          <font-awesome-icon class="icon" :icon="airbnb" />
          <h1>trippo</h1>
        </router-link>
      </div>
      <!-- <div class="nav">
        <router-link to="/about">About</router-link> |
        <router-link to="/stay">Explore</router-link>
      </div> -->
      <div class="header-controls">
        <router-link to="/stay/edit">Become a host</router-link>
        <button class="i18n">
          <span class="material-icons">
            language
          </span>
        </button>
        <div class="profile-btn">
          <router-link to="/profile"
            ><span class="material-icons">
              menu
            </span>
            <img src="../assets/imgs/user_pic-50x50.png" alt="" />
          </router-link>
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
  components: { FontAwesomeIcon },
};
</script>

<style></style>
