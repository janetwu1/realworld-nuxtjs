import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6222226a = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _c9814680 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _6636f8b0 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _020debb0 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _71684b84 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _79bfd5e4 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _34796516 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _6222226a,
    children: [{
      path: "/",
      component: _c9814680,
      name: "home"
    }, {
      path: "/login",
      component: _6636f8b0,
      name: "login"
    }, {
      path: "/register",
      component: _6636f8b0,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _020debb0,
      name: "profile"
    }, {
      path: "/settings",
      component: _71684b84,
      name: "settings"
    }, {
      path: "/editor",
      component: _79bfd5e4,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _34796516,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
