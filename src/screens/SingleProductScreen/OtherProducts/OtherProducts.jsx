import React from 'react';
import styles from './OtherProducts.module.scss';
import ProductCard from '~components/ProductCard';
import useTranslation from '~hooks/useTranslation';

function OtherProducts({ otherProducts }) {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1 className={styles['other-products-design']}>
        {t('other-products-page@title')}
      </h1>

      <div className={styles['big-box-flowers']}>
        {otherProducts.map((product, index) => {
          return (
            <div
              key={`special-product-${product.id}-${index}`}
              className={styles['responsive-card']}
            >
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OtherProducts;
