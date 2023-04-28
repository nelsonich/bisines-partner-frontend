import generateUseStore from './generate/generate';

const state = {
  isLogged: false,
  user: null,
  wallet: null,
  showModal: false,
};

const actions = (setState /* , getState */) => ({
  setIsLogged: (isLogged) => {
    setState({ isLogged });
  },

  setUser: (user) => {
    setState({ user });
  },

  setWallet: (wallet) => {
    setState({ wallet });
  },

  setAuthSuccess: (isLogged, user) => {
    setState({ isLogged, user });
  },

  setShowModal: (showModal) => {
    setState({ showModal });
  },
});

const useAuthStore = generateUseStore(state, actions);
export default useAuthStore;
