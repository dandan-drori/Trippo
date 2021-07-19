<template>
  <ul class="profile-stay-table">
    <li class="table-header">
      <div>Name</div>
      <div>Country</div>
      <div>Price / Night</div>
      <div>Actions</div>
    </li>
    <li v-for="(stay, idx) in stays" :key="stay._id" class="table-row">
      <div>{{ stay.name }}</div>
      <div>{{ stay.country }}</div>
      <div>{{ formattedPrice(stay.price) }}</div>
      <div class="actions-td">
        <button @click.stop="toggleActionsModal(idx)" class="actionsBtn">
          <span class="material-icons">
            more_horiz
          </span>
        </button>
        <div class="actionsModal" v-if="isActionsModalOpen && num === idx">
          <button class="edit-btn" @click="onEditStay(stay)">
            Edit
          </button>
          <button class="delete-btn" @click="onRemoveStay(stay)">
            Delete
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { showMsg } from '@/services/event-bus.service.js';

export default {
  components: { FontAwesomeIcon },
  props: { stays: Array },
  data() {
    return {
      isActionsModalOpen: false,
      num: -2,
    };
  },
  methods: {
    formattedPrice(price) {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return formatter.format(price);
    },
    async onRemoveStay(stay) {
      try {
        this.$store.dispatch({ type: 'removeStay', stayId: stay._id });
        showMsg('Stay removed successfully');
      } catch (err) {
        setTimeout;
        showMsg('Stay remove failed', 'error');
      }
    },
    onEditStay(stay) {
      this.$emit('edit-stay', stay);
    },
    toggleActionsModal(idx) {
      this.num = idx;
      this.isActionsModalOpen = !this.isActionsModalOpen;
    },
  },
};
</script>

<style></style>
