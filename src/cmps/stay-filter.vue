<template>
  <div class="filter-container">
    <form action="" @submit.prevent>
      <div class="loc-input">
        <small>Location</small>
        <input type="text" placeholder="Where are you going" />
      </div>
      <div class="checkin-input">
        <small>Check in</small>
        <date-picker class="date" />
      </div>
      <div class="checkout-input">
        <small>Check out</small>
        <date-picker class="date" />
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
      </div>
    </form>
  </div>
</template>

<script>
import datePicker from "../cmps/date-picker.vue";
export default {
  components: {
    datePicker,
  },
};
</script>

<style></style>
