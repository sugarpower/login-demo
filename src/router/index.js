import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import signup from '@/components/signup'
import dashboard from '@/components/dashboard'
import settings from '@/components/settings'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings,
      meta: {
        requiresAuth: true
      }
    },
    {
      // if the user types in an illegal url
      // redirect to the dashboard
      path: '*',
      redirect: '/dashboard'
    }
  ]
})

// Vue navigation guard
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-guards
// requires authentication of users on some pages (dashboard, settings)
router.beforeEach((to, from, next) => {
  var currentUser = firebase.auth().currentUser
  var requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    next({
      path: '/'
    })
  } else {
    next()
  }
})

export default router
