<template>
  <section class="mobile-checkout-container">
    <div class="mobile-checkout-header">
      <h2>
        <span @click.stop="closeModal" class="material-icons">
          chevron_left
        </span>
        Confirm and reserve
      </h2>
    </div>
    <div class="mobile-checkout-details">
      <div class="img">
        <img
          src="https://a0.muscache.com/im/pictures/29ddf2a8-3ba4-4ce0-8a95-d72b85f0dfbc.jpg?aki_policy=large"
          alt=""
        />
      </div>
      <div class="details">
        <div class="first"><p>Entire house in paris</p></div>
        <div class="second">
          <p>Stay name</p>
          <span>1 bed &middot; 1 bath</span>
        </div>
        <div class="third">
          <span class="material-icons"> star </span>
          <p>4.93 <small>(45)</small></p>
        </div>
      </div>
    </div>
    <div class="mobile-checkout-summary">
      <h3>Your trip</h3>
      <div>
        <h4>Dates</h4>
        <div class="datepicker">
          <div>
            <span>Check in date:</span>
            <input type="date" />
          </div>
          <div>
            <span>Check out date:</span>
            <input type="date" />
          </div>
        </div>
      </div>
      <div>
        <h4>Guests</h4>
        <p>1 guest</p>
      </div>
    </div>
    <div class="mobile-checkout-price">
      <h3>Price details</h3>
      <p><span>$169.07 x 3 nights</span><span>$507.21</span></p>
      <p><span>Cleaning fee</span><span>$39.72</span></p>
      <p><span>Service fee</span><span>$77.21</span></p>
      <p class="total"><small>Total(USD)</small><span>$624.14</span></p>
    </div>
    <div class="mobile-checkout-button">
      <button>Confirm and pay</button>
    </div>
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    closeModal() {
      this.$emit('closeModal', true)
    },
  },
  created() {},
}
</script>
