<template>
  <section class="signup-modal">
    <div class="signup-header">
      <button @click="toggleSignUp">
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
      <form @submit.prevent="signUp">
        <input
          type="text"
          placeholder="Enter email or username"
          v-model="userCred.username"
        />
        <input
          type="text"
          placeholder="enter full name"
          v-model="userCred.fullname"
        />
        <input
          type="password"
          placeholder="Enter password"
          v-model="userCred.password"
        />
        <button class="checkout-btn" ref="myBtn"><span>Continue</span></button>
      </form>
    </div>
    <div class="signup-divider">
      <div class="border"></div>
      <small>or</small>
    </div>
    <div class="login-socials">
      <button>
        <span class="material-icons" style="color:#4267B2;"> facebook </span
        >Continue with Facebook
      </button>
      <button>
        <img src="../../assets/imgs/svgs/google.svg" alt="" />
        Continue with Google
      </button>
      <button>
        <img src="../../assets/imgs/svgs/apple.png" alt="" />
        Continue with Apple
      </button>
      <button>
        <span class="material-icons" style="color:#000;"> phone_iphone </span
        >Continue with Phone
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userCred: {
        username: '',
        fullname: '',
        password: '',
      },
    };
  },
  methods: {
    toggleSignUp() {
      this.$emit('toggleSignUp', false);
    },
    signUp() {
      console.log(this.userCred);
      this.$emit('signUp', this.userCred);
      // this.userCred.username = '';
      // this.userCred.fullname = '';
      // this.userCred.password = '';
    },
  },
  mounted() {
    this.$refs.myBtn.onmousemove = e => {
      const x = e.offsetX;
      const y = e.offsetY;

      e.target.style.setProperty('--x', `${x}px`);
      e.target.style.setProperty('--y', `${y}px`);
    };
  },
};
</script>
