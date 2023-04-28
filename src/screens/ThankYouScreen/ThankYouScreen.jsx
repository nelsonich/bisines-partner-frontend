import React, { useState, useEffect, useCallback } from 'react';
import styles from './ThankYouScreen.module.scss';
// import Details from '~screens/OrdersScreen/Details';
import TableCart from '~screens/CartScreen/TableCart';
import { getProductList } from '~apis/shopping-cart';

function ThankYouScreen() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    loadCartData();
  }, []);

  const loadCartData = useCallback(async () => {
    const request = await getProductList();
    const response = await request.json();

    if (response.status === 'success') {
      setProductList(response.products);
    }
  }, []);

  return (
    <div className="container">
      <div
        className={`${styles['thank-you-box']} mb-2  alert text-center fw-bold`}
      >
        <div
          className={`d-flex justify-content-center my-2 ${styles['chaacked-icon-box']}`}
        >
          <div className="img-fluid me-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/200/261/original/check-png.png"
              alt=""
              className={styles['image-thank-you-success']}
              // style={{ marginBottom: '10px' }}
            />
          </div>

          <h2>Thank you, your order has been accepted.</h2>
        </div>
      </div>
      <div className={styles['table-padding']}>
        <TableCart productList={productList} loadCartData={loadCartData} />
      </div>

      {/* <div className="mb-2">
        <Details />
      </div> */}
      <table
        className={`${styles['table-box']} table text-successtable-border my-4`}
      >
        <tbody>
          <tr className={styles['tr-font']}>
            <td>At delivery time</td>

            <td className="d-flex justify-content-end">12:35 AM</td>
          </tr>
          <tr className={styles['tr-font']}>
            <td>Delivery date</td>

            <td className="d-flex justify-content-end">12.03.2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ThankYouScreen;
