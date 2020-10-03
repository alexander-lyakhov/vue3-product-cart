import { createStore } from 'vuex'
import data from './data.json';

export default createStore({
  state: {
    products: data,
    totalProducts: 0,
    totalPrice: 0
  },

  getters: {
    products(state) {
      return state.products;
    }
  },

  mutations: {
    decreaseTotal(state, price) {
      state.totalProducts--;
      state.totalPrice -= +price;
    },

    increaseTotal(state, price) {
      state.totalProducts++;
      state.totalPrice += +price;
    },

    decreaseAmount(state, {amount, price}) {
      state.totalProducts -= amount;
      state.totalPrice -= amount * price;
    },

    increaseAmount(state, {amount, price}) {
      state.totalProducts += amount;
      state.totalPrice += amount * price;
    },
  }
})
