<template>
  <form class="filters">
    <el-dropdown :hide-on-click="false">
      <el-button
        >{{ pricePreview }}<i class="el-icon-arrow-down el-icon--right"></i
      ></el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <div>
            <el-slider
              style="color:black"
              v-model="filterBy.price"
              range
              :max="1500"
            >
            </el-slider>
          </div>

          <div class="price-filter">
            <el-input
              placeholder="From price"
              v-model="filterBy.price[0]"
              type="text"
            ></el-input>
            <el-input
              placeholder="To price"
              v-model="filterBy.price[1]"
              type="text"
            ></el-input>
            <div class="filter-buttons">
              <el-button type="sucsess" @click="setFilter">Update</el-button>
            </div>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <div class="type-filter">
      <el-dropdown :hide-on-click="false">
        <el-button
          >{{ stayTypePreview }}<i class="el-icon-arrow-down el-icon--right"></i
        ></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-checkbox-group v-model="filterBy.types" class="type-list">
              <el-checkbox
                v-for="(type, idx) in stayTypeList"
                :key="idx"
                :label="type"
                class="checkbox"
                >{{ type }}</el-checkbox
              >
            </el-checkbox-group>
            <div class="filter-buttons">
              <el-button type="sucsess" @click="setFilter">Update</el-button>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="type-filter">
      <el-dropdown :hide-on-click="false">
        <el-button
          >{{ amenitiesPreview
          }}<i class="el-icon-arrow-down el-icon--right"></i
        ></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-checkbox-group v-model="filterBy.amenities" class="type-list">
              <el-checkbox
                v-for="(amenity, idx) in stayAmenitiesList"
                :key="idx"
                :label="amenity"
                class="checkbox"
                >{{ amenity }}</el-checkbox
              >
            </el-checkbox-group>
            <div class="filter-buttons">
              <el-button type="sucsess" @click="setFilter">Update</el-button>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    filterBy: Object,
    stays: Array,
    unfilteredStays: Array,
  },
  methods: {
    toggleType(type) {
      if (this.filterBy.types.includes(type)) {
        const idx = this.filterBy.types.findIndex((currType) => {
          return currType === type;
        });
        this.filterBy.types.splice(idx, 1);
      } else {
        this.filterBy.types.push(type);
      }
    },
    setFilter() {
      this.$emit('filter', this.filterBy);
    },
    toggleAmenities(amenity) {
      if (this.filterBy.amenities.includes(amenity)) {
        const idx = this.filterBy.amenities.findIndex((currAmenitiy) => {
          return currAmenitiy === amenity;
        });
        this.filterBy.amenities.splice(idx, 1);
      } else {
        this.filterBy.amenities.push(amenity);
      }
    },
  },
  computed: {
    stayTypeList() {
      const types = this.unfilteredStays.map((stay) => {
        return stay.propertyType;
      });
      return [...new Set(types)];
    },
    stayAmenitiesList() {
      const amenities = [];
      this.unfilteredStays.forEach((stay) => {
        return stay.amenities.forEach((amenity) => {
          if (amenity.txt) amenities.push(amenity.txt);
        });
      });

      return [...new Set(amenities)];
    },
    amenitiesPreview() {
      if (this.filterBy.amenities.length) {
        return this.filterBy.amenities.join(',');
      } else {
        return 'Amenities';
      }
    },
    stayTypePreview() {
      if (this.filterBy.types.length) {
        return this.filterBy.types.join(',');
      } else {
        return 'Types';
      }
    },
    pricePreview() {
      if (this.filterBy.price[0] !== 0 && this.filterBy.price[1] !== 0) {
        return `$${this.filterBy.price[0]} - $${this.filterBy.price[1]}`;
      } else {
        return 'Price';
      }
    },
  },
};
</script>

<style></style>
