export const catalog = {
  actions: {
    async fetchBeers({ commit }) {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const beers = await response.json();
      commit("updateBeerList", beers);
    },
  },
  mutations: {
    updateBeerList(state, beers) {
      state.beerList = Object.assign([], state.beerList, beers);
      //or
      // state.beerList = beers;
    },
  },
  state: () => ({
    beerList: [],
  }),
  getters: {
    allBeers(state) {
      return state.beerList;
    },
  },
};
