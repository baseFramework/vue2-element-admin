import * as types from '../../store/mutation';
import apiConfig  from '../../config/a-config';
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const state = {
  current: 'index',
};

const getters = {
  getCurrent: state => state.current,
};

const actions = {

  SET_CURRENT: ({commit}, string) => {
    commit(types.SET_CURRENT, string)
  },

}

const mutations = {
  [types.SET_CURRENT] (state, string) {
    state.current = string
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
