import React, { useMemo } from 'react';
import styles from './PaymentAmount.module.scss';
import Button from '~components/Button';
import { formatPrice } from '~utils/formatter';
import useTranslation from '~hooks/useTranslation';

function PaymentAmount({
  subTotal,
  city,
  shippingCities,
  handleChangeTotal,
  handleConfirm,
}) {
  const { t } = useTranslation();

  const shippingCost = useMemo(() => {
    if (city === null || city === 'null' || city === '') {
      return 0;
    }

    return shippingCities.filter((item) => item.id === city)[0].cost;
  }, [city]);

  const total = useMemo(() => {
    let totalPrice = subTotal + shippingCost;
    handleChangeTotal(totalPrice);
    return totalPrice;
  }, [shippingCost, subTotal]);

  return (
    <div className={styles['cart-total']}>
      <h2>{t('checkout-page@cart_total')}</h2>

      <div className="mb-2">
        <span>{t('checkout-page@subtotal')}</span>
        <span>{formatPrice(subTotal)}</span>
      </div>

      <div className="mb-2">
        <span>{t('checkout-page@shipment')}</span>
        <span>{formatPrice(shippingCost)}</span>
      </div>

      <div className="mb-2">
        <span>{t('checkout-page@total')}</span>
        <span>{formatPrice(total)}</span>
      </div>

      <Button onClick={handleConfirm} fontSizes="10px">
        {t('checkout-page@confirm')}
      </Button>
    </div>
  );
}

export default PaymentAmount;
