import Vue from "vue";
import App from "./App.vue";
import VueFullPage from "vue-fullpage.js";
import "@/assets/fullpage.css";

Vue.config.productionTip = false;
Vue.use(VueFullPage);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
