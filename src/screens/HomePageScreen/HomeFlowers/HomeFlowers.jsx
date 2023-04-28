import React from 'react';

import useTranslation from '~hooks/useTranslation';
import Button from '~components/Button';
import styles from './HomeFlowers.module.scss';
import AnchorLink from '~components/AnchorLink';

function HomeFlowers() {
  const { t } = useTranslation();
  return (
    <div className={styles['home-flowers-box']}>
      <div className={styles['flower-layer-background']}>
        <div className="container">
          <div className={styles['home-title']}>
            <h1>{t('home-page@text-title')}</h1>
          </div>

          <div className={`${styles['buttons']} pt-5 pb-2`}>
            <AnchorLink href="/categories/flowers/products">
              <Button>{t('home-page@button-home-flowers')}</Button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFlowers;
