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
router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  setTimeout(() => {
    //如果有requireAuth就不能進去那頁面
    if (to.meta.requireAuth) {
      console.log('這裡需要驗證')
      const token = localStorage.getItem('accessToken')
      //如果登入成功就放行
      if (token) {
        store.state.isLogin = true
        next();
      } else {
        next({
          path: '/login',
        });
      }

    } else {
      //沒有requireAuth就可以直接放行
      next();
    }
  })
}, 100);

axios.interceptors.request.use(
  config => {
    if (store.state.token) {  // 判斷是否存在token，如果存在的話，則每個http header都加上token
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// // http response 攔截器
// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           // 返回 401 清除token資訊並跳轉到登入頁面
//           store.commit(types.LOGOUT);
//           router.replace({
//             path: '/login',
//             query: { redirect: router.currentRoute.fullPath }
//           })
//       }
//     }
//     return Promise.reject(error.response.data)   // 返回介面返回的錯誤資訊
//   });
