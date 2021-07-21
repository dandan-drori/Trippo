<template>
  <section class="stay-card-container" @click.stop="sendToDetails(stay._id)">
    <button class="wishlist-btn">
      <span v-if="!onWishlist" class="material-icons-two-tone">
        favorite
      </span>
      <span v-else class="in-list material-icons-outlined">
        favorite
      </span>
    </button>
    <el-carousel
      v-if="stay.imgUrls.length"
      class="img-carousell"
      trigger="click"
      height="170px"
      arrow="always"
      :autoplay="false"
      :loop="true"
    >
      <el-carousel-item v-for="(imgUrl, idx) in stay.imgUrls" :key="idx">
        <img :src="imgUrl" />
      </el-carousel-item>
    </el-carousel>
    <img v-else :src="require('@/assets/imgs/no_img.jpeg')" />
    <div class="card-rating">
      <p>
        <span class="material-icons star-icon"> star </span
        >{{ avgRate }} (<small> {{ stay.reviews.length }}</small
        >)
      </p>
    </div>
    <div class="card-location">{{ stay.propertyType }} &middot; {{ city }}</div>
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
  data() {
    return {
      onWishlist: false,
    }
  },
  methods: {
    sendToDetails(stayId) {
      this.$router.push(`/stay/${stayId}`)
    },
    toggleWishlist(stayId) {
      this.onWishlist = !this.onWishlist
      if (this.onWishlist === true) {
        console.log('added to wish list', stayId)
      }
    },
  },
  computed: {
    city() {
      return this.stay.loc.address.split(',')[0]
    },
    avgRate() {
      if (!this.stay.reviews.length) return 0
      const sum = this.stay.reviews.reduce((acc, review) => {
        return acc + review.rate
      }, 0)
      return (sum / this.stay.reviews.length).toFixed(1)
    },
  },
  created() {},
}
</script>

<style></style>
