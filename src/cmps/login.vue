<template>
  <section class="login-modal">
    <div class="login-header">
      <button @click="close">
        <span class="material-icons">
          close
        </span>
      </button>
      <p>Log in or sign up</p>
    </div>
    <div class="login-input">
      <div class="input-txt">
        <h2>Welcome to Trippo</h2>
      </div>
      <form action="" @submit.prevent>
        <input type="text" placeholder="Enter email or username" />
        <input type="password" placeholder="Enter password" />
        <button>Continue</button>
      </form>
    </div>
    <div class="login-divider">
      <div class="border"></div>
      <small>or</small>
    </div>
    <div class="login-socials">
      <button>Continue with Facebook</button>
      <button>Continue with Google</button>
      <button>Continue with Apple</button>
      <button>Continue with Phone</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("login", false);
    },
  },
};
</script>
