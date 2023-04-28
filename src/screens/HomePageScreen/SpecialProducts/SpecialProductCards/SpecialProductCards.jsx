import React from 'react';
import styles from './SpecialProductCards.module.scss';
import ProductCard from '~components/ProductCard';

function SpecialProductCards({ products }) {
  return (
    <div className={styles['big-box-products']}>
      {products.map((product, index) => {
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
  );
}

export default SpecialProductCards;
