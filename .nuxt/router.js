import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1c2e95c8 = () => interopDefault(import('../pages/camera.vue' /* webpackChunkName: "pages/camera" */))
const _6c3498ed = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _2c129448 = () => interopDefault(import('../pages/detail.vue' /* webpackChunkName: "pages/detail" */))
const _083a33c2 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2b5e35da = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _10c8d5de = () => interopDefault(import('../pages/signature.vue' /* webpackChunkName: "pages/signature" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/camera",
    component: _1c2e95c8,
    name: "camera"
  }, {
    path: "/dashboard",
    component: _6c3498ed,
    name: "dashboard"
  }, {
    path: "/detail",
    component: _2c129448,
    name: "detail"
  }, {
    path: "/login",
    component: _083a33c2,
    name: "login"
  }, {
    path: "/register",
    component: _2b5e35da,
    name: "register"
  }, {
    path: "/signature",
    component: _10c8d5de,
    name: "signature"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
