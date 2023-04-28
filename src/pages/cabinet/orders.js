import React from 'react';
import PageSeo from '~components/PageSeo';
import OrdersScreen from '~screens/OrdersScreen';

function Orders(props) {
  return (
    <>
      <PageSeo title="Orders" />
      <OrdersScreen {...props} />
    </>
  );
}

Orders.auth = true;

export default Orders;
