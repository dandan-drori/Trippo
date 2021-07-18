<template>
  <section>
    <div class="head-title">
      <p class="head-title-visits">{{ stays.length }}+ stays</p>
      <h1>Entire homes</h1>
    </div>
    <section class="stay-list">
      <section
        v-for="stay in stays"
        :key="stay._id"
        class="stay-preveiw-container"
      >
        <stay-preview @click.stop :stay="stay"> </stay-preview>
      </section>
    </section>
  </section>
</template>

<script>
import stayPreview from './stay-preview';
export default {
  props: {
    stays: Array,
  },
  data() {
    return {};
  },
  computed: {},
  created() {},

  components: {
    stayPreview,
  },
};
</script>
