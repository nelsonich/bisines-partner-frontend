import React from 'react';
import PageSeo from '~components/PageSeo';
import CheckoutScreen from '~screens/CheckoutScreen';

function Checkout(props) {
  return (
    <>
      <PageSeo title="Checkout" />
      <CheckoutScreen {...props} />
    </>
  );
}

Checkout.auth = true;

export default Checkout;
