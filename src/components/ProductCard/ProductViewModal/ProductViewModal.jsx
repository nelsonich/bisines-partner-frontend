import React, { useState } from 'react';
import styles from './ProductViewModal.module.scss';
import { RxEyeOpen } from 'react-icons/rx';
import AnchorLink from '~components/AnchorLink';
import ProductCardCount from '../ProductCardCount';
import useTranslation from '~hooks/useTranslation';
import AddToCart from '~components/AddToCart';

function ProductViewModal({ product }) {
  const { t, locale } = useTranslation();

  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 1) {
      return;
    }

    setCount(count - 1);
  };

  const [isShow, setIsShow] = useState(false);

  const onOpenClick = () => setIsShow(true);
  const onCloseClick = () => setIsShow(false);

  const prevent = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <div onClick={onOpenClick} type="button">
        <RxEyeOpen />
      </div>

      {isShow && (
        <div
          onClick={onCloseClick}
          className={`modal ${styles['modal-z-index']}`}
        >
          <div
            className={`modal-dialog modal-dialog-centered w-75 ${styles['dialogs']}`}
          >
            <div className="modal-content" onClick={prevent}>
              <div className={styles['big-box-modal-cards']}>
                <div
                  className={`w-50 m-3 ${styles['back']}`}
                  style={{
                    backgroundImage: `url("${product?.image_key}")`,
                  }}
                />

                <div
                  className={`card-body w-50 pt-3 ${styles['card-body-sizes']}`}
                >
                  <h5
                    className={`${styles['title-modal']} card-title fs-3 text-dark text-start`}
                  >
                    {product?.translations[locale].title}
                  </h5>

                  <p className={`${styles['prod-code-design']} text-start`}>
                    {t('single-product-page@code')}
                    <span> N: {product?.code}</span>
                  </p>

                  <p
                    className={`${styles['prod-code-price']} card-text fs-5 text-start`}
                  >
                    {product?.price * count} AMD
                  </p>

                  <div className={styles['view-modal-calc']}>
                    <ProductCardCount
                      count={count}
                      increment={increment}
                      decrement={decrement}
                    />
                  </div>

                  <div className={`${styles['button-modal-view']} text-start`}>
                    <AddToCart productId={product.id} quantity={count} />
                  </div>

                  <div
                    className={`${styles['learn-more']} text-start`}
                    onClick={onCloseClick}
                  >
                    <AnchorLink
                      className={styles['learn-more-design']}
                      href={`/categories/${product.category.key}/products/${product.id}/${product.translations[locale].slug}`}
                    >
                      {t('single-product-page@learn-more')}
                    </AnchorLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductViewModal;
