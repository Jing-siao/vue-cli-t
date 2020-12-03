import "babel-polyfill";
import Vue from 'vue'
import App from './App.vue'
// import "./registerServiceWorker";
import router from './router'
import store from './store'


Vue.config.productionTip = false

// 全局使用directive
// Vue.directive("color", function (el, binding, vnode) {
//   el.style.color = binding.value;
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
