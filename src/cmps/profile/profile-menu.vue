<template>
  <div v-if="isProfileModalOpen" class="profile-menu" @click.stop="closeModal">
    <router-link :to="'/profile/' + userId" v-if="isLoggedinUser">
      <span>Profile</span>
    </router-link>
    <button v-if="!isLoggedinUser" @click.stop="login">Login</button>
    <button v-if="!isLoggedinUser" @click.stop="toggleSignUp">Signup</button>
    <button @click.stop="addStay">Host your home</button>
    <button v-if="isLoggedinUser" @click.stop="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedinUser: null,
    };
  },
  created() {
    this.isLoggedinUser = this.$store.getters.loggedinUser;
  },

  props: {
    isProfileModalOpen: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit('closeModal', false);
    },
    login() {
      this.$emit('login', true);
      this.$emit('closeModal', false);
    },
    toggleSignUp() {
      this.$emit('toggleSignUp', true);
      this.$emit('closeModal', false);
    },
    addStay() {
      this.$emit('addStay');
      this.$emit('closeModal', false);
    },
    logout() {
      this.$emit('logout');
      this.$emit('closeModal', false);
    },
  },
  computed: {
    userId() {
      const user = this.$store.getters.loggedinUser;
      if (user && user?._id) {
        return user._id;
      } else {
        return '';
      }
    },
  },
};
</script>

<style></style>
