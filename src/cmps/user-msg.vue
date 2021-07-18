<template>
  <div class="user-msg" v-if="!alive" :class="alertClass">
    <div class="msg-color"></div>
    <div class="msg-icon">
      <span class="material-icons">
        {{ alertIcon }}
      </span>
    </div>
    <div class="msg-container">
      <span>{{ msg.txt }}</span>
    </div>
    <button>
      <span class="material-icons">
        close
      </span>
    </button>
  </div>
</template>

<script>
import { eventBusService, SHOW_MSG } from "../services/event-bus.service.js";
export default {
  created() {
    eventBusService.$on(SHOW_MSG, (msg) => {
      this.msg = msg;
      var delay = msg.delay || 2000;
      this.alive = true;
      setTimeout(() => {
        this.alive = false;
      }, delay);
    });
  },
  data() {
    return {
      alive: false,
      msg: null,
    };
  },
  computed: {
    alertClass() {
      if (!this.msg) return;
      return `alert-${this.msg.type}`;
    },
    alertIcon() {
      if (this.msg.type === "eror") {
        return "error";
      }
      if (this.msg.type === "warning") {
        return "cancel";
      } else return "check_circle_outline";
    },
  },
};
</script>

// yellow // #f0a92e //
<span class="material-icons">
// error
// </span>

// red // #ff4040 //
<span class="material-icons">
// cancel
// </span>
