<template>
  <div v-if="isProfileModalOpen" class="profile-menu" @click.stop="closeModal">
    <router-link :to="'/profile/' + userId">
      <span>Profile</span>
    </router-link>
    <button @click.stop="login">Login</button>
    <button @click.stop="toggleSignUp">Signup</button>
    <button @click.stop="addStay">Host your home</button>
    <button @click.stop="logout">Logout</button>
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
      this.$emit("closeModal", false);
    },
    toggleSignUp() {
      this.$emit("toggleSignUp", true);
      this.$emit("closeModal", false);
    },
    addStay() {
      this.$emit("addStay");
      this.$emit("closeModal", false);
    },
    logout() {
      this.$emit("logout");
      this.$emit("closeModal", false);
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
