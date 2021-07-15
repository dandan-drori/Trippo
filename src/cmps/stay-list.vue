<template>
  <section>
    <section class="stay-list">
      <div class="head-title">
        <p class="head-title-visits">{{ stays.length }}+ stays</p>
        <h1>Entire homes</h1>

        <form class="filters">
          <el-dropdown :hide-on-click="false">
            <el-button
              >Price<i class="el-icon-arrow-down el-icon--right"></i
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
                    <el-button type="sucsess">Update</el-button>
                  </div>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <div class="type-filter">
            <el-dropdown :hide-on-click="false">
              <el-button
                >Types<i class="el-icon-arrow-down el-icon--right"></i
              ></el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <el-checkbox-group v-model="filterBy.types" class="type-list">
                    <el-checkbox
                      v-for="(type, idx) in stayTypeList"
                      :key="idx"
                      :label="type"
                      @change="toggleType(type)"
                      class="checkbox"
                      >{{ type }}</el-checkbox
                    >
                  </el-checkbox-group>
                  <div class="filter-buttons">
                    <el-button type="sucsess">Update</el-button>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="amenities-filter">
            <el-dropdown :hide-on-click="false">
              <el-button
                >Amenities<i class="el-icon-arrow-down el-icon--right"></i
              ></el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <el-checkbox-group
                    v-model="filterBy.amenities"
                    class="amenities-list"
                  >
                    <el-checkbox
                      v-for="(amenity, idx) in stayAmenitiesList"
                      :key="idx"
                      :label="amenity"
                      @change="toggleType(type)"
                      class="checkbox"
                      >{{ amenity }}</el-checkbox
                    >
                  </el-checkbox-group>
                  <div class="filter-buttons">
                    <el-button type="sucsess">Update</el-button>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </form>
      </div>

      <section
        v-for="stay in stays"
        :key="stay._id"
        class="stay-preveiw-container"
      >
        <stay-preview :stay="stay"> </stay-preview>
      </section>
    </section>
  </section>
</template>

<script>
import stayPreview from "./stay-preview";
export default {
  props: {
    stays: Array,
  },
  data() {
    return {
      filterBy: {
        price: [0, 0],
        types: [],
        amenities: [],
      },
    };
  },
  computed: {
    stayTypeList() {
      const types = this.stays.map((stay) => {
        return stay.propertyType;
      });
      return [...new Set(types)];
    },
    stayAmenitiesList() {
      const amenities = this.stays.map((stay) => {
        return stay.amenities.txt;
      });
      return [...new Set(amenities)];
    },
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
  components: {
    stayPreview,
  },
};
</script>
