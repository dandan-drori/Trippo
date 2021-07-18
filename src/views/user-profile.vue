<template>
  <section class="user-profile" v-if="loggedInUser">
    <section class="profile-card">
      <div>
        <section class="img-upload-container">
          <img
            v-if="isLoading"
            class="loading"
            src="https://i.pinimg.com/originals/f6/65/6a/f6656aa6fdb6b8f905dea0bcc2d71dd8.gif"
            alt=""
          />
          <label v-else>
            <img :src="loggedInUser.imgUrl" alt="" />
            <!-- <img
							class="upload"
							src="https://www.lifewire.com/thmb/P856-0hi4lmA2xinYWyaEpRIckw=/1920x1326/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"
							alt=""
						/> -->
            <input @change="onUploadImg" type="file" id="imgUpload" hidden />
          </label>
        </section>
        <p>update photo</p>
      </div>
      <div>
        <button class="add-stay" @click="openModal">Add New Stay</button>
      </div>
    </section>
    <stay-add v-if="isModalOpen" @close="closeModal" :stay="stay" />
    <section class="data" v-else>
      <section class="statistics">
        <p>
          Assets you own: <span>{{ loggedInUser.stays.length }}</span>
        </p>
        <p>
          Orders: <span>{{ loggedInUser.orders.length }}</span>
        </p>
      </section>
      <section class="orders-table">
        <h2>Orders:</h2>
        <profile-filter :isStaysFilter="false" @filter="setFilter" />
        <profile-table :orders="computedOrders" />
      </section>
      <section class="stays-table">
        <h2>Stays:</h2>
        <profile-filter :isStaysFilter="true" @filter="setStaysFilter" />
        <profile-stay-table :stays="computedStays" @edit-stay="editStay" />
      </section>
    </section>
  </section>
</template>

<script>
import profileFilter from "@/cmps/profile-filter";
import stayAdd from "@/cmps/stay-add";
import profileTable from "@/cmps/profile-table";
import ProfileStayTable from "../cmps/profile-stay-table.vue";
import { uploadImg } from "@/services/img-upload.service.js";
import { showMsg } from "../services/event-bus.service.js";  
export default {
  components: { profileFilter, stayAdd, profileTable, ProfileStayTable },
  data() {
    return {
      isModalOpen: false,
      filterBy: {
        name: "",
        status: "",
      },
      staysFilterBy: {
        name: "",
        country: "",
      },
      isLoading: false,
      imgUrl: "",
      stay: null,
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      switch (rowIndex) {
        case 0:
      }

      if (row.status === "pending") {
        return "warning-row";
      } else if (row.status === "rejected") {
        return "error-row";
      } else if (row.status === "approved") {
        return "success-row";
      }
      return "";
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    setStaysFilter(filterBy) {
      this.staysFilterBy = filterBy;
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal(val) {
      this.stay = null;
      this.isModalOpen = val;
    },

    async onUploadImg(ev) {
      this.isLoading = true;
      const res = await uploadImg(ev);
      this.loggedInUser.imgUrl = res.url;
      this.$store.dispatch({ type: "updateUser", user: this.loggedInUser });
      this.isLoading = false;
    },
    editStay(stay) {
      this.stay = stay;
      this.openModal();
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    computedOrders() {
      const orders = this.loggedInUser.orders.map((order) => {
        if (!order || !order.status) return {};
        // for (let i = 0; i < this.loggedInUser.stays.length; i++) {
        // if (order.stay._id === this.loggedInUser.stays[i]._id) {
        const regex = new RegExp(this.filterBy.name, "i");
        if (
          order.status.includes(this.filterBy.status) &&
          regex.test(order.stay.name)
        ) {
          const newOrder = JSON.parse(JSON.stringify(order));
          newOrder.startDate = new Date(newOrder.startDate)
            .toLocaleString()
            .split(",")[0];
          newOrder.endDate = new Date(newOrder.endDate)
            .toLocaleString()
            .split(",")[0];
          return newOrder;
        }
      });
      return orders.filter((o) => o);
    },
    computedStays() {
      return this.loggedInUser.stays.filter((stay) => {
        const regex = new RegExp(this.staysFilterBy.name, "i");
        return regex.test(stay.name) || regex.test(stay.country);
      });
    },
  },
  created() {
    this.$emit("scrolled", true);
    this.$emit("hideSearch", true);
  },
  destroyed() {
    this.$emit("hideSearch", false);
  },
};
</script>
