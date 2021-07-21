<template>
  <section>
    <section class="user-profile-container">
      <div class="profile-header">
        <nav>
          <ul>
            <li @click="openProfile" :class="{ acitve: profileOpen }">
              Profile
            </li>
            <li @click="openDashboard" :class="{ acitve: dashboardOpen }">
              Dashboard
            </li>
            <li @click="openInbox" :class="{ acitve: inboxOpen }">inbox</li>
          </ul>
        </nav>
      </div>
      <profile-dashboard v-if="dashboardOpen" />
      <profile-inbox v-if="inboxOpen" />
      <section class="user-profile" v-if="loggedInUser && profileOpen">
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
                <input
                  @change="onUploadImg"
                  type="file"
                  id="imgUpload"
                  hidden
                />
                <p>update photo</p>
              </label>
            </section>
          </div>
          <div>
            <button class="add-stay" @click="openModal">Add New Stay</button>
          </div>
        </section>
        <stay-add v-if="isModalOpen" @close="closeModal" :stay="stay" />
        <section class="data" v-else>
          <section class="statistics">
            <p>
              Assets you own: <span>{{ staysLength }}</span>
            </p>
            <p>
              Sent orders: <span>{{ sentOrdersLength }}</span>
            </p>
            <p>
              Recieved orders: <span>{{ recievedOrdersLength }}</span>
            </p>
          </section>
          <section class="orders-table">
            <h2>Orders sent:</h2>
            <profile-filter :isStaysFilter="false" @filter="setFilter" />
            <profile-table v-if="sentOrders.length" :orders="sentOrders" />
          </section>
          <section class="orders-table">
            <h2>Orders recieved:</h2>
            <profile-filter :isStaysFilter="false" @filter="setFilter" />
            <profile-table
              v-if="recievedOrders.length"
              :orders="recievedOrders"
              :showActions="true"
            />
          </section>
          <section class="stays-table">
            <h2>Stays:</h2>
            <profile-filter :isStaysFilter="true" @filter="setStaysFilter" />
            <profile-stay-table :stays="computedStays" @edit-stay="editStay" />
          </section>
        </section>
        <button @click="emitToBackend">emit to backend</button>
      </section>
    </section>
  </section>
</template>

<script>
import { uploadImg } from '@/services/img-upload.service.js';
import profileFilter from '@/cmps/profile/profile-filter';
import stayAdd from '@/cmps/profile/stay-add';
import profileTable from '@/cmps/profile/profile-table';
import ProfileStayTable from '@/cmps//profile/profile-stay-table';
import profileDashboard from '@/cmps/profile/profile-dashboard';
import profileInbox from '@/cmps/profile/profile-inbox';
import { showMsg } from '@/services/event-bus.service.js';

export default {
  components: {
    profileFilter,
    stayAdd,
    profileTable,
    ProfileStayTable,
    profileDashboard,
    profileInbox,
  },
  data() {
    return {
      isModalOpen: false,
      profileOpen: true,
      dashboardOpen: false,
      inboxOpen: false,
      filterBy: {
        name: '',
        status: '',
      },
      staysFilterBy: {
        name: '',
        country: '',
      },
      isLoading: false,
      imgUrl: '',
      stay: null,
      isProfileLoading: true,
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.status === 'pending') {
        return 'warning-row';
      } else if (row.status === 'rejected') {
        return 'error-row';
      } else if (row.status === 'approved') {
        return 'success-row';
      }
      return '';
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
      this.$store.dispatch({ type: 'updateUser', user: this.loggedInUser });
      this.isLoading = false;
    },
    editStay(stay) {
      this.stay = stay;
      this.openModal();
    },
    openProfile() {
      this.profileOpen = true;
      this.dashboardOpen = false;
      this.inboxOpen = false;
    },
    openDashboard() {
      this.dashboardOpen = true;
      this.profileOpen = false;
      this.inboxOpen = false;
    },
    openInbox() {
      this.inboxOpen = true;
      this.profileOpen = false;
      this.dashboardOpen = false;
    },
    emitToBackend() {
      socketService.emit('order_added', 'this is the data');
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    allOrders() {
      return this.$store.getters.orders;
    },
    sentOrdersLength() {
      return this.$store.getters.orders.reduce((acc, order) => {
        return this.loggedInUser._id === order.buyer._id ? acc + 1 : acc;
      }, 0);
    },
    recievedOrdersLength() {
      return this.$store.getters.orders.reduce((acc, order) => {
        return this.loggedInUser._id === order.host._id ? acc + 1 : acc;
      }, 0);
    },
    staysLength() {
      return this.$store.getters.stays.reduce((acc, stay) => {
        return this.loggedInUser._id === stay.host._id ? acc + 1 : acc;
      }, 0);
    },

    // get orders where you are the buyer
    sentOrders() {
      const orders = this.allOrders.map((order) => {
        if (order.buyer._id === this.loggedInUser._id) {
          const regex = new RegExp(this.filterBy.name, 'i');
          if (
            order.status.includes(this.filterBy.status) &&
            regex.test(order.stay.name)
          ) {
            const newOrder = JSON.parse(JSON.stringify(order));
            newOrder.startDate = new Date(newOrder.startDate)
              .toLocaleString()
              .split(',')[0];
            newOrder.endDate = new Date(newOrder.endDate)
              .toLocaleString()
              .split(',')[0];
            return newOrder;
          }
        }
      });
      return orders.filter((o) => o);
    },
    // get orders where you are the host
    recievedOrders() {
      const orders = this.allOrders.map((order) => {
        if (
          order.host._id === this.loggedInUser._id &&
          this.loggedInUser._id !== order.buyer._id
        ) {
          const regex = new RegExp(this.filterBy.name, 'i');
          if (
            order.status.includes(this.filterBy.status) &&
            regex.test(order.stay.name)
          ) {
            const newOrder = JSON.parse(JSON.stringify(order));
            newOrder.startDate = new Date(newOrder.startDate)
              .toLocaleString()
              .split(',')[0];
            newOrder.endDate = new Date(newOrder.endDate)
              .toLocaleString()
              .split(',')[0];
            return newOrder;
          }
        }
      });
      return orders.filter((o) => o);
    },
    allStays() {
      return this.$store.getters.stays;
    },
    computedStays() {
      return this.allStays.filter((stay) => {
        const regex = new RegExp(this.staysFilterBy.name, 'i');
        return (
          (this.loggedInUser._id === stay.host._id && regex.test(stay.name)) ||
          regex.test(stay.country)
        );
      });
    },
  },
  async created() {
    // this.isProfileLoading = true;
    this.$emit('scrolled', true);
    this.$emit('hideSearch', true);
    socketService.on('order-added', async function() {
      const order = this.$store.getters.allOrders[
        this.$store.getters.allOrders.length - 1
      ];
      if (order.buyer._id === this.$store.getters.loggedinUser._id) {
        await this.$store.dispatch({ type: 'loadOrders' });
        showMsg(`new order from ${order.buyer.fullname}`);
      }
    });

    await this.$store.dispatch({ type: 'loadStays' });
    await this.$store.dispatch({ type: 'loadOrders' });
  },
  destroyed() {
    this.$emit('hideSearch', false);
  },
};
</script>
