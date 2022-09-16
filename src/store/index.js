import Vue from "vue";
import Vuex from "vuex";

import product from "./product";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    token: "asdfawdfasdfasdfads",
  },
  getters: {},
  mutations: {
    update(state, value, rootState) {
      console.log(rootState.product.product);
      state.token = value;
    },
  },
  actions: {
    click({ commit, dispatch }, value) {
      commit("update", value);
      dispatch("product/click", null, { root: true });
    },
  },
  modules: {
    product,
  },
});
