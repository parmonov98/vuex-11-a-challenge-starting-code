export default{
  namespaced: true,
  state(){
    return {
      isLoggedIn: false
    }
  },
  mutations: {
    setAuth(state, payload){
      state.isLoggedIn = payload.isLoggedIn;
    }
  },
  getters: {
    isLoggedIn(state){
      return state.isLoggedIn;
    },
  },
  actions: {
    login({commit}){
      commit('setAuth', {isLoggedIn: true});
    },
    logout({commit}){
      commit('setAuth', {isLoggedIn: false});
    }
  }
}
