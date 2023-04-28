import React, { useState } from 'react';
import styles from './Order.module.scss';
import Details from '../Details';
import ProductList from '../ProductList';
import PricesOrders from '../Prices';

function Order({ order }) {
  const [showLessOrders, setShowLessOrders] = useState(true);

  return (
    <div className={styles['order']}>
      <div className={styles['button-card-orders']}>
        <div>
          <div>{`# ${order.code}`}</div>
          <div>{order.payment_type}</div>
          <div>{order.status}</div>
          <div>
            <button
              onClick={() => setShowLessOrders(!showLessOrders)}
              className={`m-0 ms-2 fw-bold bg-white`}
            >
              Details{' '}
              <div
                className={`${
                  showLessOrders
                    ? styles['details-button-open']
                    : styles['details-button-close']
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className={showLessOrders ? 'd-none' : 'd-block'}>
        <ProductList items={order.items} />
        <Details recipient={order.recipient} />
        <PricesOrders order={order} />
      </div>
    </div>
  );
}

export default Order;
