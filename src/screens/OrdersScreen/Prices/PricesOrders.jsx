import React from 'react';
import styles from './PricesOrders.module.scss';
import { formatPrice } from '~utils/formatter';
import useTranslation from '~hooks/useTranslation';

function PricesOrders({ order }) {
  const { t } = useTranslation();

  return (
    <table className="table my-3 w-100 table-striped">
      <thead>
        <tr className={styles['thead-fs']}>
          <th>{t('orders-payment-section@price')}</th>
          <th className="d-flex justify-content-end">
            {formatPrice(order.total - order.recipient.shipping_cost)}
          </th>
        </tr>
      </thead>
      <tbody className={styles['tbody-fs']}>
        <tr>
          <td>{t('orders-payment-section@shipment')}</td>
          <td className="d-flex justify-content-end">
            {formatPrice(order.recipient.shipping_cost)}
          </td>
        </tr>
        <tr>
          <td>{t('orders-payment-section@total')}</td>
          <td className="d-flex justify-content-end">
            {formatPrice(order.total)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PricesOrders;
