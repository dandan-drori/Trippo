<template>
  <section class="stay-checkout">
    <section class="checkout-header">
      <p>
        <span class="price">${{ price }}</span>
        / night
      </p>
      <p>
        <i class="el-icon-star-on"></i>
        <span>{{ avg }}</span>
        <span>({{ reviews.length }} reviews)</span>
      </p>
    </section>
    <section class="pickers">
      <div class="block">
        <el-date-picker
          style="width:100%;"
          v-model="dates"
          type="daterange"
          range-separator=""
          start-placeholder="Check-in"
          end-placeholder="Checkout"
          ref="myDatePicker"
        >
        </el-date-picker>
      </div>
      <div class="guests">
        <p>Guests:</p>
        <button :class="{ show: guestsCount > 1 }" @click="decGuests">
          -
        </button>
        <span class="guestsCount">{{ guestsCount }}</span>
        <button
          :class="{ show: guestsCount < accommodates }"
          @click="incGuests"
        >
          +
        </button>
      </div>
    </section>
    <button ref="myBtn" class="checkout-btn" @click="checkout">
      <span>{{ checkoutBtnTxt }}</span>
    </button>
    <section v-if="dates" class="reservation-data">
      <div class="charges-data">
        <small>You won't be charged yet</small>
        <div class="charges">
          <p>Accomodation</p>
          <p>{{ computedPrice.accomodation }}</p>
        </div>
        <div class="charges">
          <p>Service fee</p>
          <p>{{ computedPrice.service }}</p>
        </div>
      </div>
      <div class="total">
        <p>Total</p>
        <p>{{ computedPrice.total }}</p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: { reviews: Array, price: Number, accommodates: Number },
  data() {
    return {
      shortcuts: [
        {
          text: "Last week",
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          })(),
        },
        {
          text: "Last month",
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          })(),
        },
        {
          text: "Last 3 months",
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          })(),
        },
      ],
      dates: "",
      guestsCount: 1,
    };
  },
  computed: {
    avg() {
      const sum = this.reviews.reduce((acc, review) => {
        return acc + review.rate;
      }, 0);
      return (sum / this.reviews.length).toFixed(1);
    },
    checkoutBtnTxt() {
      return this.dates ? "Reserve" : "Check availabilty";
    },
    computedPrice() {
      const checkin = this.dates[0].getTime();
      const checkout = this.dates[1].getTime();
      const days = (checkout - checkin) / 1000 / 60 / 60 / 24;
      const accomodation = this.price * days;
      const service = this.price / 10;
      const total = accomodation + service;

      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });

      return {
        accomodation: formatter.format(accomodation),
        service: formatter.format(service),
        total: formatter.format(total),
      };
    },
  },
  methods: {
    decGuests() {
      if (this.guestsCount > 1) {
        this.guestsCount--;
      }
    },
    incGuests() {
      if (this.guestsCount < this.accommodates) {
        this.guestsCount++;
      }
    },
    checkout() {
      if (!this.dates) {
        this.$refs.myDatePicker.focus();
        return;
      }
      this.$emit("checkout", {
        dates: this.dates,
        guests: this.guestsCount,
        total: this.computedPrice.total,
      });
    },
  },
  mounted() {
    this.$refs.myBtn.onmousemove = (e) => {
      const x = e.offsetX;
      const y = e.offsetY;

      e.target.style.setProperty("--x", `${x}px`);
      e.target.style.setProperty("--y", `${y}px`);
    };
  },
};
</script>

<style>
.el-range-editor.is-active,
.el-range-editor.is-active:hover {
  border-color: #ccc;
}

.el-date-range-picker .el-picker-panel__body {
  padding: 20px;
}
.el-date-table td.in-range div,
.el-date-table td.in-range div:hover,
.el-date-table.is-week-mode .el-date-table__row.current div,
.el-date-table.is-week-mode .el-date-table__row:hover div {
  background-color: #f3f3f3;
}

.el-date-table td.available:hover {
  color: #222 !important;
}

.el-date-table td.available.today span {
  color: #222 !important;
}

.el-date-editor .el-range-separator {
  padding-top: 15px;
  color: #222 !important;
}

/* .stay-details {
  .el-picker-panel.el-date-range-picker.el-popper {
    width: 50%;
    border-radius: 20px;
    margin-right: 70px;
    transform: scale(1.2) !important;
    top: 869px !important;
    left: initial !important;
    right: 20px !important;
  }
} */

.el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner {
  width: 100%;
  border: 1px solid #ccc;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 70px;
}

.el-date-table td.end-date span,
.el-date-table td.start-date span {
  background-color: #222;
  color: #fff !important;
  font-weight: 500;
}
</style>
