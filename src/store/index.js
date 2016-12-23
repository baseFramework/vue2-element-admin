/**
 * Created by yelingfeng on 2016/8/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import index from '../pages/index/store.js'
import math from '../pages/math/store.js'
import navi from '../components/navi/store.js'
// import hello from '../pages/index/hello.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    index,
    math,
    navi,
   // hello
  }
})

export default store
