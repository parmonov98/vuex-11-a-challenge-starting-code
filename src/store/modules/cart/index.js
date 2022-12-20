export default {
  namespace: true,
  state(){
    return {
      cart: { items: [], total: 0, qty: 0 },
    }
  },
  getters: {
    cart(state) {
      console.log(state.cart);
      return state.cart;
    },
  },
  mutations: {
    addProductToCart(state, payload) {
      const selectedItem = state.cart.items.find(item => item.id === payload.id);
      if (selectedItem) {
        if (selectedItem.qty) {
          selectedItem.qty++;
        }
      } else {
        payload.qty = 1;
        state.cart.items.push(payload);
      }
      state.cart.qty = state.cart.qty + 1;
      state.cart.total = state.cart.total + 1 * payload.price;
    },
    removeProductFromCart(state, payload) {
      const selectedItemIndex = state.cart.items.findIndex(item => item.id === payload);
      const selectedItem = state.cart.items[selectedItemIndex];
      state.cart.total -= selectedItem.qty * selectedItem.price;
      state.cart.qty -= selectedItem.qty;

      state.cart.items.splice(selectedItemIndex, 1);
    },
    incrementCartItem(state, payload) {
      const selectedItem = state.cart.items.find(item => item.id === payload);
      const prev_total = selectedItem.qty * selectedItem.price;
      selectedItem.qty++;
      const new_total = selectedItem.qty * selectedItem.price;
      state.cart.total = (state.cart.total - prev_total) + new_total;
      state.cart.qty++;
    },
    decrementCartItem(state, payload) {
      const selectedItem = state.cart.items.find(item => item.id === payload);
      const prev_total = selectedItem.qty * selectedItem.price;
      if (selectedItem.qty > 1) {
        selectedItem.qty--;
        const new_total = selectedItem.qty * selectedItem.price;
        state.cart.total = (state.cart.total - prev_total) + new_total;
        state.cart.qty--;
      }
    },
  }

};