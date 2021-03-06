import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import axios from "axios";
import { routes } from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

new Vue({
  vuetify,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
