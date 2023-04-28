import React from 'react';
import { getShippingCities } from '~apis/shipping-cities';
import PageSeo from '~components/PageSeo';
import ShippingCostsScreen from '~screens/ShippingCostsScreen/ShippingCostsScreen';

function ShippingCosts(props) {
  return (
    <>
      <PageSeo title="Shipping Costs" />
      <ShippingCostsScreen {...props} />
    </>
  );
}

export async function getServerSideProps(context) {
  const request = await getShippingCities();
  const response = await request.json();

  return {
    props: {
      shippingCities: response.shipping_cities || [],
    },
  };
}

export default ShippingCosts;
