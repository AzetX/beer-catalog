import Vue from "vue";
import Vuex from "vuex";
import { catalog } from "./modules/catalog";
import { cart } from "./modules/cart";
import { infoBeer } from "./modules/infoBeer";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    catalog,
    cart,
    infoBeer,
  },
});
