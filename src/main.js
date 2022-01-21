import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import store from "./store/index.js";
import VueRouter from "vue-router";
import { routes } from "./routes.js";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
});
// global addToCart function
import cartMixin from "./mixins/cart.js";

Vue.mixin(cartMixin);

Vue.config.productionTip = false;
new Vue({
  store,
  router,
  VueAwesomeSwiper,
  BootstrapVue,
  render: (h) => h(App),
}).$mount("#app");
