// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import config from "./config";
const firebase = require("firebase");
require("./scss/setting.css");
require("./scss/reset.css");

Vue.config.productionTip = false;

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
});
