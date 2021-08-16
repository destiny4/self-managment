import { Module } from 'vuex/types'

const login: Module = {
  namespaced: true,
  state: {
    name:'skyxchen',
    avator:'laugh'
  },
  mutations: {
    setName (state,name) {
      state.name=name
    },
    setAvator(state,avator){
      state.avator=avator
    }
  }
}

export default login
