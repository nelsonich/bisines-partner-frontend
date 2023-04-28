import React from 'react';
import styles from './HomeAboutUs.module.scss';
import GoldCard from '~components/GoldCard/GoldCard';
import useTranslation from '~hooks/useTranslation';

function HomeAboutUs() {
  const { t } = useTranslation();
  return (
    <div className={styles['home-about-us-main']}>
      <section className={`${styles['mains']}`}>
        <div className="h-100 container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-12">
              <div className=" text-black">
                <div className="card-body py-3">
                  <div className="row justify-content-between">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <div className="image-box-home-about-us" />

                      <div className={`${styles['image-box-home-about-us']}`} />
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                      <div className={styles['text-box']}>
                        <GoldCard>{t('home-page@about-us-button')}</GoldCard>

                        <div className={styles['home-about-title']}>
                          <h2>{t('home-page@about-us-title')}</h2>
                          <p>{t('home-page@about-us-text')}</p>
                          <p>{t('home-page@about-us-text2')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeAboutUs;
