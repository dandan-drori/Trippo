<template>
  <section>
    <el-form ref="form" :model="stayToAdd" label-width="120px">
      <el-form-item label="Property name">
        <el-input v-model="stayToAdd.name"></el-input>
      </el-form-item>
      <el-form-item label="Price per night">
        <el-input v-model.number="stayToAdd.price"></el-input>
      </el-form-item>
      <el-form-item label="Max guests">
        <el-input v-model.number="stayToAdd.accommodates"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select
          v-model="stayToAdd.loc.country"
          placeholder="please select your country"
        >
          <el-option label="Netherlands" value="Netherlands"></el-option>
          <el-option label="France" value="France"></el-option>
          <el-option label="New York" value="New York"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity type">
        <el-select
          v-model="stayToAdd.propertyType"
          placeholder="please select property type"
        >
          <el-option label="Apartment" value="Apartment"></el-option>
          <el-option label="House" value="House"></el-option>
          <el-option label="Hotel" value="Hotel"></el-option>
          <el-option label="Loft" value="Loft"></el-option>
          <el-option label="Vila" value="Vila"></el-option>

          <el-option label="New York" value="New York"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Amenities">
        <el-checkbox-group v-model="stayToAdd.amenities">
          <el-checkbox
            label="TV"
            name="TV"
            value="TV,el-icon-monitor"
          ></el-checkbox>
          <el-checkbox
            label="Wifi"
            name="Wifi"
            :value="{ txt: 'Wifi', icon: 'wifi', fa: true }"
          ></el-checkbox>
          <el-checkbox
            label="Kitchen"
            name="Kitchen"
            :value="{ txt: 'Kitchen', icon: 'el-icon-knife-fork' }"
          ></el-checkbox>
          <el-checkbox
            label="Pets allowed"
            name="Pets"
            :value="{ txt: 'Pets allowed', icon: 'paw', fa: true }"
          ></el-checkbox>
          <el-checkbox
            label="Shower"
            name="Shower"
            :value="{ txt: 'Shower', icon: 'shower', fa: true }"
          ></el-checkbox>
          <el-checkbox
            label="Air conditioning"
            name="Air conditioning"
            :value="{ txt: 'Air conditioning', icon: 'snowflake', fa: true }"
          ></el-checkbox>
          <el-checkbox
            label="Smoking allowed"
            name="Smoking allowed"
            :value="{ txt: 'Smoking allowed', icon: 'el-icon-smoking' }"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="summary form">
        <el-input type="textarea" v-model="stayToAdd.summary"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveStay">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
import { stayService } from '../services/stay-service.js';
export default {
  data() {
    return {
      stayToAdd: null,
    };
  },
  methods: {
    saveStay() {
      this.stayToAdd.host = {
        _id: this.loggedInUser._id,
        fullName: this.loggedInUser.fullName,
        imgUrl: this.loggedInUser.imgUrl,
      };
      this.$store.dispatch({ type: 'saveStay', stay: this.stayToAdd });
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  async created() {
    const { stayId } = this.$route.params;
    if (stayId) {
      this.stayToAdd = await stayService.getById(stayId);
    } else {
      this.stayToAdd = stayService.getEmptyStay();
    }
  },
};
</script>
