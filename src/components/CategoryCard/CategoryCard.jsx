import React from 'react';
import styles from './CategoryCard.module.scss';
import AnchorLink from '~components/AnchorLink';
import useTranslation from '~hooks/useTranslation';

function CategoryCard({ category }) {
  const { locale } = useTranslation();

  return (
    <AnchorLink href={`/categories/${category.key}/products`}>
      <div className={`card ${styles['cart-box']}`}>
        <div
          className={`${styles['card-img-top']} w-100 h-100`}
          style={{ backgroundImage: `url("${category.image_key}")` }}
        >
          <div className={styles['layer-title']}>
            <h2 className={styles['text-card']}>
              {category.translations[locale]}
            </h2>
          </div>
        </div>
      </div>
    </AnchorLink>
  );
}

export default CategoryCard;
