import * as types from '../../store/mutation';
import apiConfig  from '../../config/a-config';
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const state = {
  biologyList: [],
  listApi: apiConfig.api.listApi,
  bioend: 10
};

const getters = {
  getBioEnd: state => state.bioend,
  getBiologyList : state => state.biologyList,
};

const actions = {

  SET_BIOEND: ({commit}, num) => {
    commit(types.SET_BIOEND, num)
  },

  SET_BIOLOGYLIST: ({commit}, start) => {
      var url = state.listApi
      Vue.http.get(url, {
        params: {
          start: start,
          size: 10,
          object: 'biologylist'
        }
      }).then(function (response) {
        commit(types.SET_BIOLOGYLIST, response)
      })
  },

  SET_CLEARBIOLIST:({commit}) =>{
    commit(types.SET_CLEARBIOLIST)
  }

}

const mutations = {
  [types.SET_BIOEND] (state, boolean) {
    state.bioend = boolean
  },

  [types.SET_BIOLOGYLIST] (state, response) {
    state.biologyList = state.biologyList.concat(response.data.data.results)
  },


  [types.SET_CLEARBIOLIST] (state) {
    state.biologyList = [];
  },

};

export default {
  state,
  actions,
  mutations,
  getters
}
