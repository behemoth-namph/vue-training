import axios from "../plugins/axios";

export default {
  namespaced: true,
  state() {
    return {
      product: "iphone",
      products: [],
    };
  },
  getters: {},
  mutations: {
    update(state, value) {
      state.product = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get("todos");
      commit("setProducts", response.data);
    },
    click({ commit }) {
      commit("update", "value");
    },
  },
  modules: {},
};
