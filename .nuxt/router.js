import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1c2e95c8 = () => interopDefault(import('../pages/camera.vue' /* webpackChunkName: "pages/camera" */))
const _6c3498ed = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _083a33c2 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2b5e35da = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _10c8d5de = () => interopDefault(import('../pages/signature.vue' /* webpackChunkName: "pages/signature" */))
const _e141041a = () => interopDefault(import('../pages/detail/_id.vue' /* webpackChunkName: "pages/detail/_id" */))

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
  }, {
    path: "/detail/:id?",
    component: _e141041a,
    name: "detail-id"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
