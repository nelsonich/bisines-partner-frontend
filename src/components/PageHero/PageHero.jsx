import React from 'react';
import useTranslation from '~hooks/useTranslation';
import styles from './PageHero.module.scss';

function PageHero({ title = 'default', image = '' }) {
  const { t } = useTranslation();

  return (
    <div
      className={`${styles['box-about-background']}`}
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className={styles['top-background']} />

      <div
        className={`d-flex justify-content-center align-items-center ${styles['flex-about']}`}
      >
        <div>
          <h1>{t(title)}</h1>
        </div>
      </div>
      <div className={styles['bottom-background']} />
    </div>
  );
}
export default PageHero;
