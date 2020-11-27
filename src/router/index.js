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
    component: () => import(/* webpackChunkName: "Member" */ '../views/Member.vue'),
    redirect: "/member/allPoint",
    children: [
      {
        path: 'allPoint',
        name: 'Member-AllPoint',
        component: () => import('../views/member/AllPoint.vue'),
      },
      {
        path: 'account',
        name: 'Member-Account',
        component: () => import('../views/member/Account.vue'),
      },
      {
        path: 'changePassword',
        name: 'Member-changePassword',
        component: () => import('../views/member/ChangePassword.vue'),
      },
      {
        path: 'otherSet',
        name: 'Member-otherSet',
        component: () => import('../views/member/OtherSet.vue'),
      },
      {
        path: 'destroyAccount',
        name: 'Member-DestroyAccount',
        component: () => import('../views/member/DestroyAccount.vue'),
      },
      {
        path: 'dePosit',
        name: 'Member-DePosit',
        component: () => import('../views/member/DePosit.vue'),
      },
      {
        path: 'searchPoint',
        name: 'Member-SearchPoint',
        component: () => import('../views/member/SearchPoint.vue'),
      },
      {
        path: 'exchangeRecord',
        name: 'Member-ExchangeRecord',
        component: () => import('../views/member/ExchangeRecord.vue'),
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
  //不會hash 需前後端配置
  // routes: [{ path: '*', component: NotFoundComponent }]
  // mode: "history",
  // base: process.env.BASE_URL,

  routes
})

export default router
