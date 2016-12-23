import * as types from '../../store/mutation';
import apiConfig  from '../../config/a-config';
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const state = {
  mathList: [],
  listApi: apiConfig.api.listApi,
  mathend: 10,
};

const getters = {
  getMathEnd: state => state.mathend,
  getMathList: state => state.mathList,
};

const actions = {

  SET_MATHEND: ({commit}, num) => {
    commit(types.SET_MATHEND, num)
  },

  SET_MATHLIST: ({commit}, start) => {
    var url = state.listApi
    Vue.http.get(url, {
      params: {
        start: start,
        size: 10,
        object: 'mathlist'
      }
    }).then(function (response) {
      commit(types.SET_MATHLIST, response)
    })
  },

  SET_CLEARMATHLIST:({commit}) =>{
    commit(types.SET_CLEARMATHLIST)
  }

}

const mutations = {
  [types.SET_MATHEND] (state, num) {
    state.mathend = num
  },
  [types.SET_MATHLIST] (state, response) {
    state.mathList = state.mathList.concat(response.data.data.results)
  },


  [types.SET_CLEARMATHLIST] (state) {
    state.mathList = [];
  },

};

export default {
  state,
  actions,
  mutations,
  getters
}
