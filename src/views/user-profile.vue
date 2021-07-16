<template>
  <section class="user-profile" v-if="loggedInUser">
    <section class="profile-card">
      <div>
        <img
          :src="require('@/assets/imgs/userImgs/' + loggedInUser.imgUrl)"
          alt=""
        />
        <p>update photo</p>
      </div>
      <div>
        <button class="add-stay" @click="openModal">Add New Stay</button>
      </div>
    </section>
    <section class="data">
      <section class="statistics">
        <p>Assets you own: {{ loggedInUser.stays.length }}</p>
        <p>Orders: {{ loggedInUser.orders.length }}</p>
      </section>
      <section>
        <h2>Orders:</h2>
        <filter-orders :orders="loggedInUser.orders" @filter="setFilter" />
        <article v-for="stay in loggedInUser.stays" :key="stay._id">
          <el-table
            :data="computedOrders"
            style="width: 100%"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="stay.name" label="Name" width="180">
            </el-table-column>
            <el-table-column prop="buyer.fullname" label="Guest" width="120">
            </el-table-column>
            <el-table-column prop="startDate" label="Check-In" width="140">
            </el-table-column>
            <el-table-column prop="endDate" label="Check-Out" width="140">
            </el-table-column>
            <el-table-column prop="status" label="Status" width="140">
            </el-table-column>
            <el-table-column width="140">
              <slot>
                <button class="approve">
                  <font-awesome-icon :icon="check" />
                </button>
                <button class="reject">
                  <font-awesome-icon :icon="times" />
                </button>
              </slot>
            </el-table-column>
          </el-table>
        </article>
      </section>
      <stay-add v-if="isModalOpen" />
    </section>
  </section>
</template>

<script>
import filterOrders from '@/cmps/filter-orders';
import stayAdd from '@/cmps/stay-add';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export default {
  components: { FontAwesomeIcon, filterOrders, stayAdd },
  data() {
    return {
      check: faCheck,
      times: faTimes,
      isModalOpen: false,
      filterBy: {
        name: '',
        status: '',
      },
    };
  },
  methods: {
    tableRowClassName({ row }) {
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
    openModal() {
      this.isModalOpen = true;
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    computedOrders() {
      const orders = this.loggedInUser.orders.map((order) => {
        for (let i = 0; i < this.loggedInUser.stays.length; i++) {
          if (order.stay._id === this.loggedInUser.stays[i]._id) {
            if (
              order.status.includes(this.filterBy.status) &&
              order.stay.name.includes(this.filterBy.name)
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
        }
      });
      return orders.filter((o) => o);
    },
  },
};
</script>
