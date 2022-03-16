export default {
  state: () => {
    return {
      currentProduct: {},
    };
  },
  mutations: {
    setCurrentProduct(state, data) {
      state.currentProduct = data;
    },
    setData(state, data) {
      state.currentProduct.name = data.name;
      state.currentProduct.img = data.image;
    },
  },
  actions: {},
  getters: {},
};
