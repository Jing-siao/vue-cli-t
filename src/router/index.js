import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Activity from '../views/Activity.vue'
import Question from '../views/Question.vue'
import Login from '../views/Login.vue'
import Error from '../views/Error.vue'


Vue.use(VueRouter)

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
      },
      {
        path: 'changePassword',
        name: 'Member-changePassword',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/ChangePassword.vue'),
      },
      {
        path: 'otherSet',
        name: 'Member-otherSet',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/OtherSet.vue'),
      },
      {
        path: 'destroyAccount',
        name: 'Member-DestroyAccount',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/DestroyAccount.vue'),
      },
      {
        path: 'dePosit',
        name: 'Member-DePosit',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/DePosit.vue'),
      },
      {
        path: 'searchPoint',
        name: 'Member-SearchPoint',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/SearchPoint.vue'),
      },
      {
        path: 'exchangeRecord',
        name: 'Member-ExchangeRecord',
        component: () => import(/* webpackChunkName: "Member" */'../views/member/ExchangeRecord.vue'),
      },
    ]

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
// router.beforeEach(async (to, from, next) => {
//   // 看看 to 和 from 兩個 arguments 會吐回什麼訊息
//   console.log('to: ', to)
//   console.log('from: ', from)

//   // 目的路由在meta上是否有設置requireAuth: true
//   if (to.meta.requireAuth) {
//     // 獲取Cookies當中的login資訊並取得token
//     const info = Cookies.get('login')
//     const token = JSON.parse(info).token
//     console.log(token)
//     if (info) {
//       // 如果token不為空，且確實有這個欄位則讓路由變更
//       if (token.length > 0 || token === undefined) {
//         next()
//       } else {
//         // 未通過則導回login頁面
//         next({ name: 'Login' })
//       }
//     } else {
//       next({ name: 'Login' })
//     }
//   } else {
//     next()
//   }
// })
export default router
