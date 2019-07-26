import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Clang from './components/Clang.vue'
import Java from './components/Java.vue'
import HtmlLanguage from './components/HtmlLanguage.vue'
// import Python from './assets/Python.html'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Clang',
      name: 'Clang',
      component: Clang
    },
    {
      path: '/Java',
      name: 'Java',
      component: Java
    },
    {
      path: '/HtmlLanguage',
      name: 'HtmlLanguage',
      component: HtmlLanguage
    },
    // {
    //   path: '/Python',
    //   name: 'Python',
    //   component: Python
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
