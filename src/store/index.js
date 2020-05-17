import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    network:true,
  },
  mutations: {
    loginSuccess(state,params){
      state.token = params
    },
    //断网提示
    changeNetwork(state,params){
      state.network = params
    }
  },
  actions: {
  },
  modules: {
  }
})
