export const state = () => ({
  currentproduct: {}
});

export const mutations = {
  setCurrentProduct(state, data) {
      state.currentproduct = data
  }
};
