import React from 'react';
import styles from './SpecialProducts.module.scss';
import useTranslation from '~hooks/useTranslation';
import SpecialProductCards from './SpecialProductCards';

function SpecialProducts({ products }) {
  const { t } = useTranslation();

  return (
    <>
      <div className={`text-center ${styles['big-box-special-products']}`}>
        <div>
          <h1 className={styles['title-box-products-special']}>
            {t('home-page@popular-products-title')}
          </h1>
        </div>

        <div className="container">
          <SpecialProductCards products={products} />
        </div>
      </div>
    </>
  );
}

export default SpecialProducts;
