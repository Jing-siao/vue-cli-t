import "babel-polyfill";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import "./registerServiceWorker";
import router from './router'
import store from './store'

Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
// 全局使用directive
// Vue.directive("color", function (el, binding, vnode) {
//   el.style.color = binding.value;
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
