<template>
  <form class="filters">
    <button @click.stop="togglePrice">
      {{ pricePreview }}
      <span class="material-icons">expand_more</span>
    </button>

    <div @click.stop class="price-modal" v-if="isPriceModalOpen">
      <el-slider style="color:black" v-model="filterBy.price" range :max="1500">
      </el-slider>
      <div class="price-container">
        <input
          v-model="filterBy.price[0]"
          class="from-price"
          placeholder="From"
        />
        <input v-model="filterBy.price[1]" class="to-price" placeholder="To" />
      </div>
      <div class="button-container">
        <button @click.stop="clearFilter">Clear</button>
        <button @click.stop="setFilter">Update</button>
      </div>
    </div>
    <!----------->
    <!-- types -->
    <!----------->
    <button @click.stop="toggleTypes">
      {{ stayTypePreview }}<span class="material-icons">expand_more</span>
    </button>

    <div @click.stop class="types-modal" v-if="isTypesModalOpen">
      <div>
        <input
          v-model="filterBy.types"
          type="checkbox"
          value="Apartment"
          id="Apartment"
        />

        <label for="Apartment"
          ><span class="material-icons"> check_box_outline_blank </span
          >Apartment</label
        >
      </div>
      <div>
        <input
          v-model="filterBy.types"
          type="checkbox"
          value="Vila"
          id="Vila"
        />
        <span class="material-icons">
          check_box_outline_blank
        </span>
        <label for="Vila">Vila</label>
      </div>
      <div>
        <input
          v-model="filterBy.types"
          type="checkbox"
          value="Hotel"
          id="Hotel"
        />
        <span class="material-icons">
          check_box_outline_blank
        </span>
        <label for="Hotel">Hotel</label>
      </div>
      <div>
        <input
          v-model="filterBy.types"
          type="checkbox"
          value="House"
          id="House"
        />
        <span class="material-icons">
          check_box_outline_blank
        </span>
        <label for="House">House</label>
      </div>
      <div>
        <input
          v-model="filterBy.types"
          type="checkbox"
          value="Loft"
          id="Loft"
        />
        <span class="material-icons">
          check_box_outline_blank
        </span>
        <label for="Loft">Loft</label>
      </div>
      <div class="button-container">
        <button @click.stop="clearFilter">Clear</button>
        <button @click.stop="setFilter">Update</button>
      </div>
    </div>

    <!-- amenities -->
    <button @click.stop="toggleAmenities">
      {{ amenitiesPreview }}<span class="material-icons">expand_more</span>
    </button>

    <div @click.stop class="amenities-modal" v-if="isAmenitiesModalOpen">
      <div>
        <input
          v-model="filterBy.amenities"
          type="checkbox"
          value="TV"
          id="TV"
        />
        <span class="material-icons">
          check_box_outline_blank
        </span>
        <label for="TV">TV</label>
      </div>
      <div>
        <input
          v-model="filterBy.amenities"
          type="checkbox"
          value="Wifi"
          id="Wifi"
        />
        <span class="material-icons">
          check_box_outline_blank
        </span>
        <label for="Wifi">Wifi</label>
      </div>
      <div>
        <input
          v-model="filterBy.amenities"
          type="checkbox"
          value="Shower"
          id="Shower"
        />
        <span class="material-icons">
          check_box_outline_blank
        </span>
        <label for="Shower">Shower</label>
      </div>
      <div>
        <input
          v-model="filterBy.amenities"
          type="checkbox"
          value="Kitchen"
          id="Kitchen"
        />
        <span class="material-icons">
          check_box_outline_blank
        </span>
        <label for="Kitchen">Kitchen</label>
      </div>
      <div>
        <input
          v-model="filterBy.amenities"
          type="checkbox"
          value="Pets allowed"
          id="Pets"
        />
        <span class="material-icons">
          check_box_outline_blank
        </span>
        <label for="Pets">Pets allowed</label>
      </div>
      <div>
        <input
          v-model="filterBy.amenities"
          type="checkbox"
          value="Air conditioning"
          id="Air"
        />
        <span class="material-icons">
          check_box_outline_blank
        </span>
        <label for="Air">Air conditioning</label>
      </div>
      <div>
        <input
          v-model="filterBy.amenities"
          type="checkbox"
          value="Smoking allowed"
          id="Smoking"
        />
        <span class="material-icons">
          check_box_outline_blank
        </span>
        <label for="Smoking">Smoking allowed</label>
      </div>
      <div class="button-container">
        <button @click.stop="clearFilter">Clear</button>
        <button @click.stop="setFilter">Update</button>
      </div>
    </div>

    <button @click.stop="clearFilter">Clear Filter</button>
  </form>
</template>

<script>
export default {
  props: {
    filterBy: Object,
    stays: Array,
    unfilteredStays: Array,
  },
  created() {
    window.addEventListener("click", this.closeModals);
  },
  destroyed() {
    window.addEventListener("click", this.closeModals);
  },
  data() {
    return {
      isPriceModalOpen: false,
      isTypesModalOpen: false,
      isAmenitiesModalOpen: false,
    };
  },
  methods: {
    togglePrice() {
      this.isPriceModalOpen = !this.isPriceModalOpen;
      this.isTypesModalOpen = false;
      this.isAmenitiesModalOpen = false;
    },
    toggleTypes() {
      this.isTypesModalOpen = !this.isTypesModalOpen;
      this.isPriceModalOpen = false;
      this.isAmenitiesModalOpen = false;
    },
    toggleAmenities() {
      this.isAmenitiesModalOpen = !this.isAmenitiesModalOpen;
      this.isTypesModalOpen = false;
      this.isPriceModalOpen = false;
    },
    closeModals() {
      this.isTypesModalOpen = false;
      this.isPriceModalOpen = false;
      this.isAmenitiesModalOpen = false;
    },
    setFilter() {
      this.$emit("filter", this.filterBy);
    },

    // toggleType(type) {
    //   if (this.filterBy.types.includes(type)) {
    //     const idx = this.filterBy.types.findIndex((currType) => {
    //       return currType === type;
    //     });
    //     this.filterBy.types.splice(idx, 1);
    //   } else {
    //     this.filterBy.types.push(type);
    //   }
    // },
    // toggleAmenities(amenity) {
    //   if (this.filterBy.amenities.includes(amenity)) {
    //     const idx = this.filterBy.amenities.findIndex((currAmenitiy) => {
    //       return currAmenitiy === amenity;
    //     });
    //     this.filterBy.amenities.splice(idx, 1);
    //   } else {
    //     this.filterBy.amenities.push(amenity);
    //   }
    // },
    clearFilter() {
      const filter = {
        price: [0, 9999],
        types: [],
        amenities: [],
        city: "",
      };
      this.$emit("filter", filter);
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
        return this.filterBy.amenities.join(",");
      } else {
        return "Amenities";
      }
    },
    stayTypePreview() {
      if (this.filterBy.types.length) {
        return this.filterBy.types.join(",");
      } else {
        return "Types";
      }
    },
    pricePreview() {
      if (this.filterBy.price[0] !== 0 && this.filterBy.price[1] !== 0) {
        return `$${this.filterBy.price[0]} - $${this.filterBy.price[1]}`;
      } else {
        return "Price";
      }
    },
  },
};
</script>

<style></style>
