import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  curAccount:null,      //用户所有数据
  model:{state:false,context:'',topClass:''}    //模态框默认数据
}

const Actions = {
    saveCurAccount({commit},jsonData){
      commit('saveCurAccount',jsonData)
    },
    changeModel({commit},jsonData){
      commit('changeModel',jsonData)
    }
  }
const Mutations = {
  saveCurAccount(state,jsonData){   //用户信息
    state.curAccount = jsonData;
  },
  changeModel(state,jsonData){      //改变公共模态框状态
    state.model = jsonData
  }
}

const Getters = {
  curAccount(state){
    return state.curAccount;
  },
  model(state){
    return state.model
  }
}

export default new Vuex.Store({
  state:state,
  actions:Actions,
  mutations:Mutations,
  getters:Getters
})
