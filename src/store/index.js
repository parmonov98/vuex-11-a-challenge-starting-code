import { createStore } from "vuex";

// import authModule from "./modules/auth/index.js"
import productModule from "./modules/products/index.js"
import cartModule from "./modules/cart/index.js"

const store = createStore({
  modules: {
    // auth: authModule,
    product: productModule,
    cart: cartModule
  },
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
    login(context){
      context.commit('setAuth', {isLoggedIn: true});
    },

    logout(context){
      context.commit('setAuth', {isLoggedIn: false});
    }
  }
});

export default store;