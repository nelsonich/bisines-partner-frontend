/* eslint-disable no-unused-vars */

import { createContext } from 'react';

const PreloadingContext = createContext({
  isFinished: false,
  finishLoading: (name) => {},
});

export default PreloadingContext;
