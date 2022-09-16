<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <h1>menu</h1>
    <router-view />
    <h1>footer</h1> -->
    Product name: {{ product }}
    <br />
    List products:
    <div v-for="product in products" :key="product.id">
      {{ product.title }}
    </div>
    <button @click="click">Click</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const mapper = createNamespacedHelpers("product");

export default {
  data() {
    return {
      test: "aa",
    };
  },
  computed: {
    ...mapper.mapState(["product", "products"]),
  },

  methods: {
    ...mapper.mapActions(["click", "fetchProducts"]),
  },

  mounted() {
    this.fetchProducts();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
