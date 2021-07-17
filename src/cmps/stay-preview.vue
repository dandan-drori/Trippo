<template>
  <section class="stay-card-container">
    <el-carousel
      class="img-carousell"
      trigger="click"
      height="170px"
      arrow="always"
      :autoplay="false"
      :loop="false"
    >
      <el-carousel-item v-for="(imgUrl, idx) in stay.imgUrls" :key="idx">
        <img :src="imgUrl" @click="sendToDetails(stay._id)" />
      </el-carousel-item>
    </el-carousel>
    <!-- <img class="preview-img" :src="require(`@/assets/imgs/stays/${stay.loc.countryCode}/${stay.imgFolder}/${stay.imgUrls[0]}`)"> -->
    <div class="card-rating">
      <p><i class="el-icon-star-on star-icon"></i>4.7</p>
    </div>
    <div class="card-location">
      {{ stay.loc.country }} - {{ stay.propertyType }}
    </div>
    <div>
      <span>{{ stay.price }}$ </span>/ night
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
