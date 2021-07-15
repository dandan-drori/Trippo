<template>
  <section>
    <div class="chat-header">
      <div class="name">
        <p>Host name</p>
      </div>
      <div class="chat-controls">
        <button>_</button>
        <button @click="toggleChat">X</button>
      </div>
    </div>
    <div class="chat-body">Hey there!</div>
    <div class="chat-footer">
      <input type="text" placeholder="Enter your message" />
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    toggleChat() {
      this.$emit("close", false);
    },
  },
};
</script>
