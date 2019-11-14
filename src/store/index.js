import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeId:0,//保存访问过的详情页历史
  },
  mutations: {
    updateTypeId:(state,typeId)=>{
      state.typeId = typeId;
    }
  },
  actions: {
  },
  
  modules: {
  }
})
