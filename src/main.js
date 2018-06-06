// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerMap from './router/router'
import store from './store'
import {sync} from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './lib/font-awesome-4.7.0/css/font-awesome.min.css'

Vue.use(ElementUI)
Vue.use(VueRouter) //use vue-router
const router = new VueRouter({routes: routerMap})
sync(store, router)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
