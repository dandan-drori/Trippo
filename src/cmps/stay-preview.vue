<template>
  <section class="stay-card-container">
    <el-carousel
      class="img-carousell"
      trigger="click"
      height="170px"
      arrow="always"
      :autoplay="false"
      :loop="true"
    >
      <el-carousel-item v-for="(imgUrl, idx) in stay.imgUrls" :key="idx">
        <img :src="imgUrl" @click="sendToDetails(stay._id)" />
      </el-carousel-item>
    </el-carousel>
    <div class="card-rating">
      <p>
        <span class="material-icons star-icon"> star </span>4.7<small
          >(12)</small
        >
      </p>
    </div>
    <div class="card-location">
      {{ stay.propertyType }} &middot; {{ stay.loc.country }}
    </div>
    <div class="card-name">{{ 'stay short name' }}</div>
    <div class="card-price">
      <p>
        <span>${{ stay.price }}</span
        >/night
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    stay: Object,
  },
  methods: {
    sendToDetails(stayId) {
      this.$router.push(`/stay/${stayId}`);
    },
  },
};
</script>

<style></style>
