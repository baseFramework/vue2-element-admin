import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import store from './store'
import {sync} from 'vuex-router-sync'
import routerMap from './router/router'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({routes: routerMap})
sync(store, router)

const app = new Vue({
  router,
  store
}).$mount('#app');
