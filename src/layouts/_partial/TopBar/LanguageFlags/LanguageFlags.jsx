import React from 'react';
import Image from 'next/image';
import AnchorLink from '~components/AnchorLink';
import { useRouter } from 'next/router';
import { flags } from '~providers/TranslationProvider';
import useTranslation from '~hooks/useTranslation';
import styles from './LanguageFlags.module.scss';
import flagEn from '~assets/images/flags/en-us.jpg';
import flagAm from '~assets/images/flags/hy-am.jpg';
import flagRu from '~assets/images/flags/ru-ru.jpg';

function LanguageFlags() {
  const { setLanguage } = useTranslation();
  const router = useRouter();

  let flag;
  if (router.locale === 'hy-am') {
    flag = flagAm;
  } else if (router.locale === 'en-us') {
    flag = flagEn;
  } else if (router.locale === 'ru-ru') {
    flag = flagRu;
  } else {
    flag = flagEn;
  }

  return (
    <div className="dropdown-center">
      <button
        className={`bg-transparent dropdown-toggle ${styles['flags']}`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Image width={30} alt="" height={15} src={flag} />
      </button>
      <ul className={`${styles['drop-main']} dropdown-menu`}>
        <div className={`dropdown-item  ${styles['flags-box']}`}>
          {Object.keys(flags).map((locale) => (
            <AnchorLink
              key={`header-flag-${locale}`}
              href={router.asPath}
              locale={locale}
              onClick={() => setLanguage(locale)}
            >
              <Image width={30} alt="" height={15} src={flags[locale]} />
            </AnchorLink>
          ))}
        </div>
      </ul>
    </div>
  );
}
export default LanguageFlags;
