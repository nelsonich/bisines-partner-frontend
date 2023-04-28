import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { useRouter } from 'next/router';
// import moment from 'moment';
import TranslationContext from '~contexts/TranslationContext';
import {
  LOCALE_EN_US,
  LOCALE_RU_RU,
  LOCALE_HY_AM,
  defaultLanguage,
  available,
  languages,
} from './data';
import useServerSide from '~hooks/useServerSide';

// const setMomentLocale = (locale) => {
//   const locales = {
//     [LOCALE_EN_US]: 'en',
//     [LOCALE_HY_AM]: 'hy-am',
//     [LOCALE_RU_RU]: 'ru',
//   };

//   moment.locale(locales[locale]);
// };

const setAppLocale = async (locale) => {
  // setMomentLocale(locale);
  return locale;
};

function TranslationProvider({ children }) {
  const router = useRouter();
  const { isServerSide } = useServerSide();

  const refInitCalled = useRef(false);

  const [locale, setLocale] = useState(() =>
    router.locale === 'default' ? defaultLanguage : router.locale
  );
  const translations = useMemo(() => {
    const data = {
      [LOCALE_EN_US]: available[LOCALE_EN_US].messages,
      [LOCALE_RU_RU]: available[LOCALE_RU_RU].messages,
      [LOCALE_HY_AM]: available[LOCALE_HY_AM].messages,
    };

    return data;
  }, []);

  const setLanguage = useCallback(async (newLocale) => {
    setLocale(newLocale);
    await setAppLocale(newLocale);
  }, []);

  const translateInLanguage = useCallback(
    (translateInLocale, key, data = {}) => {
      if (!translations) {
        return key;
      }
      if (!translateInLocale) {
        return key;
      }

      const localeGroup = translations[translateInLocale];
      if (!localeGroup) {
        return key;
      }

      let value = localeGroup[key];
      if (!value) {
        value = translations[defaultLanguage][key];
      }

      if (!value) {
        return key;
      }

      if (data) {
        try {
          for (const search in data) {
            const pattern = new RegExp('{{' + search + '}}', 'g');
            const replaceTo = data[search];

            value = value.replace(pattern, replaceTo);
          }
        } catch (e) {
          // noting to do
        }
      }

      return value;
    },
    [locale, translations]
  );

  const translateInCurrent = useCallback(
    (key, data = {}) => translateInLanguage(locale, key, data),
    [locale, translations]
  );

  const initiate = useCallback(async () => {
    let currentLocale = router.locale;

    currentLocale = currentLocale || defaultLanguage;
    if (!Object.keys(languages).includes(currentLocale)) {
      currentLocale = defaultLanguage;
    }

    await setLanguage(currentLocale);
  }, [router.locale]);

  useEffect(() => {
    initiate();
  }, []);

  if (isServerSide && !refInitCalled.current) {
    setAppLocale(router.locale);
    refInitCalled.current = true;
  }

  if (!locale) {
    return null;
  }

  return (
    <TranslationContext.Provider
      value={{
        languages: available,
        locale: locale,
        defaultLanguage: defaultLanguage,
        setLanguage: setLanguage,
        t: translateInCurrent,
        translate: translateInLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export default TranslationProvider;
