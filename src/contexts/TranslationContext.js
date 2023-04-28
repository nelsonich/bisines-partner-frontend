/* eslint-disable no-unused-vars */

import { createContext } from 'react';

const TranslationContext = createContext({
  languages: [],
  locale: '',

  setLanguage: (locale) => {},
  t: (key, data = {}) => '',
  translate: (locale, key, data = {}) => '',
});

export default TranslationContext;
