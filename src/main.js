import "babel-polyfill";
import Vue from 'vue'

import axios from 'axios'//Ajax套件
import VueAxios from 'vue-axios'//將Ajax套件轉為vue的套件
import App from './App.vue'
// import "./registerServiceWorker";
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(VueAxios, axios)
// axios.defaults.withCredentials = true;
// 全局使用directive
// Vue.directive("color", function (el, binding, vnode) {
//   el.style.color = binding.value;
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


axios.interceptors.request.use(
  config => {
    let jwtToken = sessionStorage.getItem("accessToken");
    if (jwtToken) {
      // 判斷是否存在token，如果存在的話，則每個http header都加上token
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });



