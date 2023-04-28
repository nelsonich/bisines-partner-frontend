import React from 'react';
import styles from './ProductCard.module.scss';
import AnchorLink from '~components/AnchorLink';
import useTranslation from '~hooks/useTranslation';
import ProductViewModal from './ProductViewModal';
import AddToFavorite from './AddToFavorite';
import AddToCart from '~components/AddToCart';
import { formatPrice } from '~utils/formatter';

function ProductCard({ product, width = '15rem' }) {
  const { t, locale } = useTranslation();

  return (
    <div className={`${styles['position-big-box']}`}>
      <AnchorLink
        href={`/categories/${product.category.key}/products/${product.id}/${product.translations[locale].slug}`}
        className="d-flex justify-content-center"
      >
        <div
          style={{
            backgroundImage: `url('${product.image_key}')`,
          }}
          className={`${styles['card-box']} card`}
        />
      </AnchorLink>

      <div className="d-flex justify-content-center">
        <div
          style={{ width: width }}
          className={`${styles['box-position']} card`}
        >
          <AnchorLink
            href={`/categories/${product.category.key}/products/${product.id}/${product.translations[locale].slug}`}
          >
            <h4 className="text-center">
              {product.translations[locale].title}
            </h4>
          </AnchorLink>
          <p>
            {t('home-page@product-price')} -{' '}
            <span>{formatPrice(product.price)}</span>
          </p>

          <div className={styles['action-buttons']}>
            <AddToCart productId={product.id} quantity={1} showIcon={true} />
            <AddToFavorite product={product} />
            <ProductViewModal product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
