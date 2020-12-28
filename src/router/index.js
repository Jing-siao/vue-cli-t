
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Home from '../views/Home.vue'
import Activity from '../views/Activity.vue'
import Question from '../views/Question.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import SignupCardReader from '../views/SignupCardReader.vue'
import Error from '../views/Error.vue'


Vue.use(VueRouter, store)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/activity',
    name: 'Activity',
    component: Activity

  },
  {
    path: '/bonus',
    name: 'Bonus',
    component: () => import('../views/Bonus.vue')
  },
  {
    path: '/question',
    name: 'Question',
    component: Question

  },
  {
    path: '/member',
    name: 'Member',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //此方法可以省下一開始讀取時間 但就是換頁會多一次讀取
    //打包在同一支js
    component: () => import(/* webpackChunkName: "Member" */'../views/Member.vue'),

    redirect: "/member/allPoint",

    children: [
      {
        path: 'allPoint',
        name: 'Member-AllPoint',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/AllPoint.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'account',
        name: 'Member-Account',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/Account.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'changePassword',
        name: 'Member-changePassword',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/ChangePassword.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'otherSet',
        name: 'Member-otherSet',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/OtherSet.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'destroyAccount',
        name: 'Member-DestroyAccount',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/DestroyAccount.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'dePosit',
        name: 'Member-DePosit',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/DePosit.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'searchPoint',
        name: 'Member-SearchPoint',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/SearchPoint.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'exchangeRecord',
        name: 'Member-ExchangeRecord',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/ExchangeRecord.vue'),
        meta: {
          requiresAuth: true
        },
      },
    ]

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signupCardReader',
    name: 'SignupCardReader',
    component: SignupCardReader
  },
  {
    path: '/404',
    name: 'Error',
    component: Error
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  // routes: [{ path: '*', component: NotFoundComponent }]
  // mode: "history",
  // base: "",

  // 如果要使用 history mode，要請後端把所有頁面的route交由前端處理，並都指向同一個檔案 index.html page
  // base: process.env.BASE_URL,

  routes,

})
router.beforeEach((to, from, next) => {
  // 看看 to 和 from 兩個 arguments 會吐回什麼訊息
  // console.log(to, from, next)
  //如果有requireAuth就不能進去那頁面
  let jwtToken = sessionStorage.getItem("accessToken");
  if (to.meta.requiresAuth) {
    // console.log('這裡需要驗證')
    if (jwtToken) {
      store.dispatch("updateLogin", true);
      next();
      // console.log(store.state.isLogin)
    } else {
      //不是的話就導入登入頁
      alert('請先登入')
      next({
        path: '/login',
      });
    }

  } else if (jwtToken) {
    store.dispatch("updateLogin", true);
    next();

  } else {
    //沒有requireAuth就可以直接放行
    next();
  }
})


export default router
