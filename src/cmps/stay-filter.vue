<template>
  <div class="filter-container">
    <form action="" @submit.prevent>
      <div class="loc-input">
        <small>Location</small>
        <input type="text" placeholder="Where are you going" />
      </div>
      <div class="checkin-input">
        <small>Check in</small>
        <input type="text" />
      </div>
      <date-picker class="date" />
      <div class="checkout-input">
        <small>Check out</small>
        <input type="text" />
      </div>
      <div class="guests-input">
        <div>
          <small>Guests</small>
          <input type="text" placeholder="Add guests" />
        </div>
        <div>
          <button class="search-btn">
            <img src="../assets/imgs/search_white_24dp.svg" alt="" />
          </button>
        </div>
        <div class="guests-modal">
          <div class="type">
            <div class="details">
              <p>Adults</p>
              <span>Ages 13 or above</span>
            </div>
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="10"
            ></el-input-number>
          </div>
          <div class="type">
            <div class="details">
              <p>Children</p>
              <span>Ages 2-12</span>
            </div>
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="10"
            ></el-input-number>
          </div>
          <div class="type">
            <div class="details">
              <p>Infants</p>
              <span>under 2</span>
            </div>
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="10"
            ></el-input-number>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import datePicker from "../cmps/date-picker.vue";
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
  components: {
    datePicker,
  },
};
</script>

<style></style>
