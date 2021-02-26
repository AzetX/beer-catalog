export const infoBeer = {
  actions: {
    async searchBeer({ commit }, beerItem) {
      try {
        const response = await fetch(
          `https://api.punkapi.com/v2/beers?beer_name=${beerItem}&&per_page=1`
        );
        const infoBeer = await response.json();
        commit("searchingBeer", infoBeer);
      } catch (err) {
        commit("errorSearching", err);
      }
    },
  },
  mutations: {
    searchingBeer(state, infoBeer) {
      state.infoBeer = Object.assign([], state.infoBeer, infoBeer);
      state.err = "";
    },
    errorSearching(state, err) {
      state.err = err.message;
    },
  },
  state: () => ({
    infoBeer: [],
    err: "",
  }),
  getters: {
    beerItemInfo(state) {
      if (!state.err) return state.infoBeer;
      return state.err;
    },
    reqResponse(state, getters){
      const response = (getters.beerItemInfo !== state.err) ? 201: 403;
      return response
    }
  },
};
