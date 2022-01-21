import Vue from "vue";
import Vuex from "vuex";
import productsModules from "./modules/products.js";
import cartModules from "./modules/cart.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    prods: productsModules,
    cart: cartModules,
  },
});
