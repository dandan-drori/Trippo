import { stayService } from '@/services/stay-service.js';

export default {
  state: {
    stays: [],
    unfilteredStays: [],
    filterBy: {
      price: [0, 9999],
      types: [],
      amenities: [],
      city: '',
    },
  },
  getters: {
    stays(state) {
      return state.stays;
    },
    filterBy(state) {
      return state.filterBy;
    },
    unfilteredStays(state) {
      return state.unfilteredStays;
    },
  },
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays;
    },
    setUnfilteredStays(state, { unfilteredStays }) {
      state.unfilteredStays = unfilteredStays;
    },
    removeStay(state, { stayId }) {
      const idx = state.stays.findIndex((s) => s._id === stayId);
      state.stays.splice(idx, 1);
    },
    updateStay(state, { stay }) {
      const idx = state.stays.findIndex((s) => s._id === stay._id);
      state.stays.splice(idx, 1, stay);
    },
    addStay(state, { stay }) {
      state.stays.push(stay);
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy;
    },
  },
  actions: {
    async loadStays({ commit, state }) {
      try {
        console.log(state.filterBy);
        const stays = await stayService.query(state.filterBy);

        commit({ type: 'setStays', stays });
        return stays;
      } catch (err) {
        console.log('Cannot load stays', stays);
        throw err;
      }
    },
    async loadUnfilteredStays({ commit }) {
      try {
        const unfilteredStays = await stayService.query({
          price: [0, 9999],
          types: [],
          amenities: [],
          city: '',
        });

        commit({ type: 'setUnfilteredStays', unfilteredStays });
        return unfilteredStays;
      } catch (err) {
        console.log('Cannot load stays', unfilteredStays);
        throw err;
      }
    },
    async removeStay({ commit }, payload) {
      try {
        await stayService.remove(payload.stayId);
        commit(payload);
      } catch (err) {
        console.log('Cannot remove stay:', payload.stayId);
        throw err;
      }
    },
    async saveStay({ commit }, { stay }) {
      const type = stay._id ? 'updateStay' : 'addStay';
      try {
        const savedStay = await stayService.save(stay);
        commit({ type, stay: savedStay });
        return savedStay;
      } catch (err) {
        console.log('Prefix', Prefix);
        throw err;
      }
    },
  },
};
