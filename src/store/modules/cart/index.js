export default {
  namespaced: true,
  state(){
    return { items: [], total: 0, qty: 0 }
  },
  getters: {
    items(state){
      return state.items;
    },
    total(state){
      return state.total;
    },
    quantity(state){
      return state.qty;
    }    
  },
  actions: {
    addToCart(context, payload){
      context.commit('addProductToCart', payload)
    },
    removeProduct(context, payload){
      context.commit('removeProductFromCart', payload);
    },
    increment(context, payload){
      context.commit('incrementCartItem', payload);
    },
    decrement(context, payload){
      context.commit('decrementCartItem', payload);
    }
  },
  mutations: {
    addProductToCart(state, payload) {
      const selectedItem = state.items.find(item => item.id === payload.id);
      if (selectedItem) {
        if (selectedItem.qty) {
          selectedItem.qty++;
        }
      } else {
        payload.qty = 1;
        state.items.push(payload);
      }
      state.qty = state.qty + 1;
      state.total = state.total + 1 * payload.price;
    },
    removeProductFromCart(state, payload) {
      const selectedItemIndex = state.items.findIndex(item => item.id === payload);
      const selectedItem = state.items[selectedItemIndex];
      state.total -= selectedItem.qty * selectedItem.price;
      state.qty -= selectedItem.qty;

      state.items.splice(selectedItemIndex, 1);
    },
    incrementCartItem(state, payload) {
      const selectedItem = state.items.find(item => item.id === payload);
      const prev_total = selectedItem.qty * selectedItem.price;
      selectedItem.qty++;
      const new_total = selectedItem.qty * selectedItem.price;
      state.total = (state.total - prev_total) + new_total;
      state.qty++;
    },
    decrementCartItem(state, payload) {
      const selectedItem = state.items.find(item => item.id === payload);
      const prev_total = selectedItem.qty * selectedItem.price;
      if (selectedItem.qty > 1) {
        selectedItem.qty--;
        const new_total = selectedItem.qty * selectedItem.price;
        state.total = (state.total - prev_total) + new_total;
        state.qty--;
      }
    },
  }

};