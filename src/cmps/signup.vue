<template>
  <section class="signup-modal">
    <div class="signup-header">
      <button @click="close">
        <span class="material-icons">
          close
        </span>
      </button>
      <p>Sign up</p>
    </div>
    <div class="signup-input">
      <div class="input-txt">
        <h2>Welcome to Trippo</h2>
      </div>
      <form action="" @submit.prevent>
        <input type="text" placeholder="Enter email or username" />
        <input type="text" placeholder="enter full name" />
        <input type="password" placeholder="Enter password" />
        <button>Continue</button>
      </form>
    </div>
    <div class="signup-divider">
      <div class="border"></div>
      <small>or</small>
    </div>
    <div class="signup-socials">
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
      this.$emit("signup", false);
    },
  },
};
</script>
