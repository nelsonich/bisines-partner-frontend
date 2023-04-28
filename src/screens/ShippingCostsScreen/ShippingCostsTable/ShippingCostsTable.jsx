import React from 'react';
import styles from './ShippingCostsTable.module.scss';
import useTranslation from '~hooks/useTranslation';
import { formatPrice } from '~utils/formatter';

function ShippingCostsTable({ shippingCities }) {
  const { locale } = useTranslation();

  return (
    <table
      className={`table my-5 w-75 table-striped ${styles['shipping-cost-table']}`}
    >
      <thead>
        <tr className={styles['thead-fs']}>
          <th scope="col">Street</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody className={styles['tbody-fs']}>
        {shippingCities.map((city, index) => (
          <tr key={`ShippingCostsTable-Item-${index}`}>
            <td>{city.translations[locale]}</td>
            <td>{formatPrice(city.cost)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ShippingCostsTable;
