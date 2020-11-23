import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Activity from '../views/Activity.vue'
import Question from '../views/Question.vue'
import Login from '../views/Login.vue'


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
    component: () => import(/* webpackChunkName: "Member" */ '../views/Member.vue')

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  //不會hash 需前後端配置
  // mode: 'history',
  // routes: [{ path: '*', component: NotFoundComponent }]
  routes
})

export default router
