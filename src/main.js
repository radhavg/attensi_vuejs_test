import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

// vue instance
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
