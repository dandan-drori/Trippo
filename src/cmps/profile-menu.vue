<template>
  <div v-if="isProfileModalOpen" class="profile-menu" @click="closeModal">
    <router-link :to="'/profile/' + userId">
      <span>Profile</span>
    </router-link>
    <button @click="login">Login</button>
    <button @click="toggleSignUp">Signup</button>
    <button @click="addStay">Host your home</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  props: {
    isProfileModalOpen: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
    login() {
      this.$emit("login", true);
    },
    toggleSignUp() {
      this.$emit("toggleSignUp", true);
    },
    addStay() {
      this.$emit("addStay");
    },
    logout() {
      this.$emit("logout");
    },
  },
  computed: {
    userId() {
      const user = this.$store.getters.loggedinUser;
      if (user && user?._id) {
        return user._id;
      } else {
        return "";
      }
    },
  },
};
</script>

<style></style>
