import React from 'react';
import styles from './HomeOurCustomerReview.module.scss';
import useTranslation from '~hooks/useTranslation';
import SliderReview from './SliderReview';

function OurCustomerReview({ reviews }) {
  const { t } = useTranslation();

  return (
    <div className={styles['our-customer-review-main']}>
      <div className={`${styles['box-about-background']}`}>
        <div className={styles['top-background']} />

        <div className="text-box pt-3">
          <div className={styles['title-review']}>
            <h4>{t('home-page@review-title')}</h4>
          </div>
        </div>

        <div className={`${styles['swiper-slider-box']} container`}>
          <SliderReview reviews={reviews} />
        </div>
        <div className={styles['bottom-background']} />
      </div>
    </div>
  );
}

export default OurCustomerReview;
