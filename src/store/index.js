import { createStore } from 'vuex'

export default createStore({
  state: {
    tarefas: [], loading: false
  },
  getters: {
  },
  mutations: {//funçoes sincronas
    addTarefa(state,payload){
      state.tarefas.push(payload)
    },
    setLoading(state,payload){
      state.loading=payload
    },
    toggleTarefa(state,payload){
      const index = state.tarefas.findIndex((item) => item.id === payload.id);
      if (index > -1) {
        const checked = !state.tarefas[index].checked;
        state.tarefas[index].checked = checked;
      }
    },
    removeTarefa(state,payload){
      const index = state.tarefas.findIndex((item) => item.id === payload.id);
      if (index > -1) {
        state.tarefas.splice(index,1)
      }
    }
  },
  actions: {//Funções assincronas
    addTarefa({ commit }, tarefa) {
      commit('setLoading',true)
      return new Promise(resolve => {
        setTimeout(() => {
          tarefa.id = Date.now()
          commit('addTarefa', tarefa)
          commit('setLoading',false)
          resolve(tarefa)
        },500)
      })
    },
    toggleTarefa({commit},tarefa){
      commit('toggleTarefa',tarefa)
    },
    removeTarefa({commit},tarefa){
      commit('removeTarefa',tarefa)
    }
  },
  modules: {
  }
})
