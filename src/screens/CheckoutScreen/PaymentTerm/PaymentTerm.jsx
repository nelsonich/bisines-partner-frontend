import React from 'react';
import Payment from './Payment/Payment';
import PaymentAmount from './PaymentMount';

function PaymentTerm({
  subTotal,
  city,
  shippingCities,
  handleChangeTotal,
  handleConfirm,
}) {
  return (
    <>
      <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-1">
        <Payment />
      </div>
      <div className="col-md-10 col-lg-6 col-xl-7 d-flex justify-content-end order-2 order-lg-2">
        <PaymentAmount
          subTotal={subTotal}
          city={city}
          shippingCities={shippingCities}
          handleConfirm={handleConfirm}
          handleChangeTotal={handleChangeTotal}
        />
      </div>
    </>
  );
}

export default PaymentTerm;
