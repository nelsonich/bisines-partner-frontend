import React, { useCallback, useEffect, useState } from 'react';
// import styles from './OrdersScreen.module.scss';
import CabinetLayout from '~layouts/CabinetLayout';
import { getOrders } from '~apis/orders';
import Order from './Order/Order';
import useTranslation from '~hooks/useTranslation';

function OrdersScreen() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const loadOrderList = useCallback(async () => {
    const request = await getOrders();
    const response = await request.json();

    if (response.status === 'success') {
      setOrders(response.orders);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadOrderList();
  }, []);

  return (
    <CabinetLayout
      title={t('cabinet-menu-section@orders')}
      iconClassName="fa-solid fa-cart-arrow-down"
    >
      {!loading
        ? orders.map((order, index) => (
            <Order key={`Order-${index}`} order={order} />
          ))
        : 'loading...'}
    </CabinetLayout>
  );
}

export default OrdersScreen;
