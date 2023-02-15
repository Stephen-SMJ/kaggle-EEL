import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { Button, Select } from 'element-ui'
import App from './App.vue'
import jquery from 'jquery/dist/jquery.min'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import axios from "axios";
import router from "@/router";
// axios.defaults.baseURL = '';

Vue.use(router);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(jquery);
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
