import React from 'react';
import styles from './CartTotal.module.scss';
import AnchorLink from '~components/AnchorLink';
import Button from '~components/Button';
import { formatPrice } from '~utils/formatter';
import useTranslation from '~hooks/useTranslation';

function CartTotal({ total }) {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles['box-cart-total']}>
        <div className={styles['cart-total']}>
          <div className="w-75">
            <div className={styles['ct-sub']}>
              <span>{t('shopping-cart-page@subtotal')}</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>

          <div className="d-flex justify-content-center my-5">
            <AnchorLink
              href="/shopping/checkout"
              className={styles['button-total']}
            >
              <Button fontSizes="10px">
                {t('shopping-cart-page@checkout')}
              </Button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotal;
