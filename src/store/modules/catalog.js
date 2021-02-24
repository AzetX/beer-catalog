export const catalog = {
  actions: {
    async fetchBeers({ commit }) {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const beers = await response.json();
      commit("updateBeerList", beers);
    },
    sortBeer({ commit }, sortTitle) {
      commit("sortingBeerList", sortTitle);
    },
  },
  mutations: {
    updateBeerList(state, beers) {
      state.beerList = Object.assign([], state.beerList, beers);
      //or
      // state.beerList = beers;
    },
    sortingBeerList(state, sortTitle) {
      if (sortTitle === "A-Z") {
        state.beerList = [...state.beerList.sort(getSortList)];
      } else {
        state.beerList = [...state.beerList.sort(getSortList).reverse()];
      }
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

//functions
const getSortList = (a, b) => {
  const beerName1 = a.name.toLowerCase();
  const beerName2 = b.name.toLowerCase();
  if (beerName1 > beerName2) {
    return 1;
  } else if (beerName1 < beerName2) {
    return -1;
  }
  return 0;
};
