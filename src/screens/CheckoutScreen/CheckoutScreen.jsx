import React, { useCallback, useEffect, useState } from 'react';
import styles from './CheckoutScreen.module.scss';
import MainLayout from '~layouts/MainLayout';
import PageHero from '~components/PageHero';
import TableCart from '~screens/CartScreen/TableCart';
import ShippingDetails from './ShippingDetails';
import { getProductList } from '~apis/shopping-cart';
import { getShippingCities } from '~apis/shipping-cities';
import useTranslation from '~hooks/useTranslation';

function CheckoutScreen() {
  const { t } = useTranslation();

  const [subTotal, setSubTotal] = useState(0);
  const [productList, setProductList] = useState([]);
  const [shippingCities, setShippingCities] = useState([]);

  useEffect(() => {
    loadCartData();
    loadShippingCities();
  }, []);

  const loadCartData = useCallback(async () => {
    const request = await getProductList();
    const response = await request.json();

    if (response.status === 'success') {
      setProductList(response.products);
      setSubTotal(response.total);
    }
  }, []);

  const loadShippingCities = useCallback(async () => {
    const request = await getShippingCities();
    const response = await request.json();

    if (response.status === 'success') {
      setShippingCities(response.shipping_cities);
    }
  }, []);

  return (
    <MainLayout>
      <div className={styles['checkout-box']}>
        <PageHero
          title={t('checkout-page@title')}
          image="https://foundr.com/wp-content/uploads/2022/10/how-to-boost-your-ecommerce-sales.png"
        />

        <section className="h-100 h-custom">
          <div className="container h-100 py-5">
            {productList.length > 0 ? (
              <>
                <div className={styles['table-padding']}>
                  <TableCart
                    productList={productList}
                    loadCartData={loadCartData}
                  />
                </div>

                <div className="py-2">
                  <ShippingDetails
                    shippingCities={shippingCities}
                    subTotal={subTotal}
                  />
                </div>
              </>
            ) : (
              <h1>Empty!</h1>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default CheckoutScreen;
