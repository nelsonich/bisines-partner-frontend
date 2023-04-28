import flagEnUs from '~assets/images/flags/en-us.jpg';
import flagRuRu from '~assets/images/flags/ru-ru.jpg';
import flagHyAm from '~assets/images/flags/hy-am.jpg';
import messagesEnUs from '~translations/en-us.json';
import messagesRuRu from '~translations/ru-ru.json';
import messagesHyAm from '~translations/hy-am.json';

export const LOCALE_EN_US = 'en-us';
export const LOCALE_RU_RU = 'ru-ru';
export const LOCALE_HY_AM = 'hy-am';
export const defaultLanguage = LOCALE_EN_US;

export const available = {
  [LOCALE_EN_US]: {
    long: 'English',
    short: 'Eng',
    flag: flagEnUs,
    code: LOCALE_EN_US,
    messages: messagesEnUs,
  },
  [LOCALE_RU_RU]: {
    long: 'Русский',
    short: 'Рус',
    flag: flagRuRu,
    code: LOCALE_RU_RU,
    messages: messagesRuRu,
  },
  [LOCALE_HY_AM]: {
    long: 'Հայերեն',
    short: 'Հայ',
    flag: flagHyAm,
    code: LOCALE_HY_AM,
    messages: messagesHyAm,
  },
};

export const languages = {
  [LOCALE_EN_US]: 'English',
  [LOCALE_RU_RU]: 'Русский',
  [LOCALE_HY_AM]: 'Հայերեն',
};

export const flags = {
  [LOCALE_EN_US]: available[LOCALE_EN_US].flag,
  [LOCALE_RU_RU]: available[LOCALE_RU_RU].flag,
  [LOCALE_HY_AM]: available[LOCALE_HY_AM].flag,
};
