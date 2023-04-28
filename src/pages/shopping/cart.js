import React from 'react';
import PageSeo from '~components/PageSeo';
import CartScreen from '~screens/CartScreen';

function Cart(props) {
  return (
    <>
      <PageSeo title="Shopping cart" />
      <CartScreen {...props} />
    </>
  );
}

Cart.auth = true;

export default Cart;
