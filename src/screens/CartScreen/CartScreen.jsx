import React, { useState, useEffect, useCallback } from 'react';
// import styles from './CartScreen.module.scss';
import MainLayout from '~layouts/MainLayout';
import PageHero from '~components/PageHero';
import CartTotal from './CartTotal';
import TableCart from './TableCart';
import { getProductList } from '~apis/shopping-cart';
import useTranslation from '~hooks/useTranslation';

function CartScreen() {
  const { t } = useTranslation();
  const [total, setTotal] = useState(0);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    loadCartData();
  }, []);

  const loadCartData = useCallback(async () => {
    const request = await getProductList();
    const response = await request.json();

    if (response.status === 'success') {
      setProductList(response.products);
      setTotal(response.total);
    }
  }, []);

  return (
    <MainLayout>
      <PageHero
        title={t('shopping-cart-page@title')}
        image="https://img.rawpixel.com/private/static/images/website/2022-05/rm428-0054_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ec30c49d2beddd242748e2329f9d0549"
      />

      <div className="table-responsive container pt-3">
        {productList?.length > 0 ? (
          <>
            <TableCart productList={productList} loadCartData={loadCartData} />

            <div>
              <CartTotal total={total} />
            </div>
          </>
        ) : (
          <h1 className="text-center">{t('shopping-cart@empty')}</h1>
        )}
      </div>
    </MainLayout>
  );
}

export default CartScreen;
