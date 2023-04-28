import generateUseStore from './generate/generate';

const state = {
  list: [],
};

const actions = (setState, getState) => ({
  setProduct: (productId) => {
    const { list } = getState();
    const newList = [...list, productId];
    const uniqueList = newList.filter(
      (value, index, array) => array.indexOf(value) === index
    );

    setState({ list: uniqueList });
  },

  setProducts: (productIds) => {
    setState({ list: productIds });
  },

  removeProduct: (productId) => {
    const { list } = getState();
    const index = list.indexOf(productId);
    if (index !== -1) {
      list.splice(index, 1);
    }
    setState({ ...list });
  },
});

const useShoppingCartStore = generateUseStore(state, actions);
export default useShoppingCartStore;
