import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  curAccount:null,      //用户所有数据
}

const Actions = {
    saveCurAccount({commit},jsonData){
      commit('saveCurAccount',jsonData)
    }
  }
const Mutations = {
  saveCurAccount(state,jsonData){   //用户信息
    state.curAccount = jsonData;
  }
}

const Getters = {
  curAccount(state){
    return state.curAccount;
  }
}

export default new Vuex.Store({
  state:state,
  actions:Actions,
  mutations:Mutations,
  getters:Getters
})
