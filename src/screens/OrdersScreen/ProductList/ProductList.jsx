import React from 'react';
import styles from './ProductList.module.scss';
import useTranslation from '~hooks/useTranslation';
import { formatPrice } from '~utils/formatter';

function ProductList({ items }) {
  const { locale, t } = useTranslation();

  return (
    <table className="table table-striped  mt-4">
      <thead>
        <tr className={styles['thead-tr']}>
          <th scope="col">{t('orders@product-code')}</th>
          <th scope="col">{t('orders@product')}</th>
          <th scope="col">{t('orders@product-price')}</th>
          <th scope="col">{t('orders@quantity-short')}</th>
          <th scope="col">{t('orders@total')}</th>
        </tr>
      </thead>
      <tbody className={styles['sizes-tr']}>
        {items.map((item, index) => (
          <tr key={`OrderItem-${index}`}>
            <td className={styles['responsive-table-code']}>
              <div># {item.product.code}</div>
            </td>
            <td className={styles['responsive-table-image']}>
              <img
                className={styles['image-product-orders']}
                src={item.product.image_key}
                alt={item.product.translations[locale]}
              />
              <span>{item.product.translations[locale]}</span>
            </td>
            <td>
              <div>{formatPrice(item.price)}</div>
            </td>
            <td>
              <div>{item.quantity}</div>
            </td>
            <td>
              <div>{formatPrice(item.total)}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
