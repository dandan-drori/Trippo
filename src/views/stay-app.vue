<template>
  <section class="explore">
    <div class="head-title">
      <p class="head-title-visits">{{ stays.length }}+ stays</p>
      <h1>{{ place }}</h1>
    </div>
    <stay-list-filter
      v-if="stays && unfilteredStays"
      :filterBy="filterBy"
      :stays="stays"
      @filter="setFilter"
      :unfilteredStays="unfilteredStays"
    />
    <stay-list :stays="stays" v-if="stays" />
  </section>
</template>

<script>
import stayList from '@/cmps/list/stay-list';
import stayListFilter from '@/cmps/list/stay-list-filter';

export default {
  components: {
    stayList,
    stayListFilter,
  },
  data() {
    return {
      currCity: '',
    };
  },
  methods: {
    setFilter(filterBy) {
      console.log(filterBy);
      this.$store.commit({ type: 'setFilter', filterBy });
      this.$store.dispatch({ type: 'loadStays' });
    },
  },
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
    filterBy() {
      return this.$store.getters.filterBy;
    },
    unfilteredStays() {
      return this.$store.getters.unfilteredStays;
    },
    place() {
      if (this.currCity) {
        return `Places in ${this.currCity}`;
      } else {
        return `Entire places`;
      }
    },
  },
  async created() {
    this.$emit('scrolled', true);
    const { city } = this.$route.params;
    this.currCity = city;
    if (city) {
      var filterBy = this.$store.getters.filterBy;
      filterBy.city = city;

      this.$store.commit({ type: 'setFilter', filterBy });
    }

    await this.$store.dispatch({ type: 'loadUnfilteredStays' });
    await this.$store.dispatch({ type: 'loadStays' });
  },
  destroyed() {
    this.$store.commit({
      type: 'setFilter',
      filterBy: {
        price: [0, 1500],
        types: [],
        amenities: [],
        city: '',
      },
    });
  },
};
</script>

<style></style>
