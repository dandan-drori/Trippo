<template>
  <div class="filter-container">
    <form action="" @submit.prevent="search">
      <div class="loc-input">
        <small>Location</small>
        <input type="text" placeholder="Where are you going" />
      </div>
      <div class="checkin-input">
        <small>Check in</small>
        <span>{{ dates[0] | moment("MMM, D") }}</span>
        <input type="text" v-model="dates[0]" />
      </div>
      <date-picker v-model="dates" range value-type="timestamp"></date-picker>
      <div class="checkout-input">
        <small>Check out</small>
        <span>{{ dates[1] | moment("MMM, D") }}</span>
        <input type="text" v-model="dates[1]" />
      </div>
      <div class="guests-input" @click="toggleGuestsModal">
        <div>
          <small>Guests</small>
          <input type="text" placeholder="Add guests" />
        </div>
        <div>
          <button class="search-btn">
            <p>Search</p>
            <img src="../assets/imgs/search_white_24dp.svg" />
          </button>
        </div>
        <div class="guests-modal" v-if="isGuestsModalOpen" @click.stop>
          <div class="type">
            <div class="details">
              <p>Adults</p>
              <span>Ages 13 or above</span>
            </div>
            <el-input-number
              v-model="adults"
              :min="0"
              :max="100"
            ></el-input-number>
          </div>
          <div class="type">
            <div class="details">
              <p>Children</p>
              <span>Ages 2-12</span>
            </div>
            <el-input-number
              v-model="children"
              :min="0"
              :max="100"
            ></el-input-number>
          </div>
          <div class="type">
            <div class="details">
              <p>Infants</p>
              <span>under 2</span>
            </div>
            <el-input-number
              v-model="infants"
              :min="0"
              :max="100"
            ></el-input-number>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  data() {
    return {
      dates: [Date.now(), Date.now() + 1000],
      adults: 0,
      children: 0,
      infants: 0,
      isGuestsModalOpen: false,
    };
  },
  methods: {
    toggleGuestsModal() {
      this.isGuestsModalOpen = !this.isGuestsModalOpen;
    },
    search() {
      let numOfGuests = this.adults + this.children + this.infants;
      console.log(numOfGuests);
      this.adults = 0;
      this.children = 0;
      this.infants = 0;
    },
  },
  computed: {
    computedCheckin() {
      // let checkin = new Date(this.dates[0]);
      // return checkin.toString().split(" ")[1] + " " + [2];
    },
    computedCheckout() {
      let checkout = new Date(this.dates[1]);
      return checkout.toString().split(" ")[1] + " " + [2];
    },
  },
  components: {
    DatePicker,
  },
};
</script>

<style></style>
