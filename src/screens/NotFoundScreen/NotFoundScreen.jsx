import React from 'react';
import styles from './NotFoundScreen.module.scss';
import MainLayout from '~layouts/MainLayout';
import useTranslation from '~hooks/useTranslation';

function NotFoundScreen() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="container">
        <div className={styles['row']}>
          <h1>{t('404-page@title')}</h1>
        </div>
      </div>
    </MainLayout>
  );
}

export default NotFoundScreen;
