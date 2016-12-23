import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routes'
import store from './store'
import {sync} from 'vuex-router-sync'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI)   // use Muse-Ui  2.0.0-alpha.10
Vue.use(VueRouter) //use vue-router
const router = new VueRouter({routes: configRouter})
sync(store, router)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
