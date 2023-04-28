import { create as createZustandState } from 'zustand';

function generateUseStore(initialState, stateInitiator) {
  const store = createZustandState((set, get) => ({
    ...initialState,
    ...stateInitiator(set, get),
  }));

  return store;
}

export default generateUseStore;
