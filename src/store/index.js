import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.prototype.axios = axios
// Vue.use(Vuex, VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    // token: "", // 存放jwt token
    isLogin: false,// 登入狀態
    exchangeE05: {},
  },

  //actions為方法 如同methods 進行非同步行為及取得資料 並不能直接改state裡的資料
  actions: {
    //第一個參數為固定context裡面有很多方法 這裡用commit傳入mutations的LOGIN
    //第二個參數為payload稱作載荷 這裡叫status自己命名會帶到mutations裡的status
    updateLogin(context, status) {
      context.commit('LOGIN', status)
    },
    exchangeSuccess(context, object) {
      context.commit('SUCCESS', object)
    }
  },
  //mutations為改變state裡的資料方法
  mutations: {
    //第一個參數為固定state 就是上方state資料
    //第二個參數為payload稱作載荷 這裡叫status自己命名從actions傳下來的
    LOGIN(state, status) {
      state.isLogin = status

    },
    SUCCESS(state, obj) {
      state.exchangeE05 = obj

    }
  },

  modules: {
  }
})
