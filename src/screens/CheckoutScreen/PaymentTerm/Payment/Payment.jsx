import React from 'react';
import styles from './Payment.module.scss';

function Payment() {
  return (
    <div className={`${styles['box-payment']} mt-4`}>
      <div className="form-check d-flex justify-content-start align-items-center mb-4">
        <input
          disabled={true}
          className={`form-check-input me-2 ${styles['inputs']}`}
          type="radio"
          id="flexCheckDefault"
          name="payment"
        />

        <label
          className={`${styles['label-payment']} w-75 d-flex align-items-center form-check-label`}
          htmlFor="flexCheckDefault"
        >
          <div className="d-flex">
            <img className="ms-3" src="https://4u.am/images/visa.svg" alt="" />
            <img
              className="ms-1 me-3"
              src="https://4u.am/images/master.svg"
              alt=""
            />
          </div>
          Online payment
        </label>
      </div>
      <div className="form-check d-flex justify-content-start align-items-center mb-4">
        <input
          disabled={true}
          className={`form-check-input me-2 ${styles['inputs']}`}
          type="radio"
          name="payment"
          id="flexCheckDefaultTel"
        />

        <label
          className={`${styles['label-payment']} w-75 d-flex align-items-center form-check-label`}
          htmlFor="flexCheckDefaultTel"
        >
          <div>
            <img
              className="ms-3 me-4"
              src="https://4u.am/images/telcell.png?v=af1499196aba1e4c34cfac9b043ccdcb9196904d5"
              alt=""
            />
          </div>
          Telcell Wallet
        </label>
      </div>

      <div className="form-check d-flex justify-content-start align-items-center mb-4">
        <input
          disabled={true}
          className={`form-check-input me-2 ${styles['inputs']}`}
          type="radio"
          name="payment"
          id="flexCheckDefaultIdram"
        />

        <label
          className={`${styles['label-payment']} w-75 d-flex align-items-center form-check-label`}
          htmlFor="flexCheckDefaultIdram"
        >
          <div>
            <img
              className="ms-3 me-4"
              src="https://4u.am/images/idramLogo.png"
              alt=""
            />
          </div>
          Idram
        </label>
      </div>

      <div className="form-check d-flex justify-content-start align-items-center mb-4">
        <input
          disabled={true}
          className={`form-check-input me-2 ${styles['inputs']}`}
          type="radio"
          name="payment"
          id="flexCheckDefaultEasy"
        />

        <label
          className={`${styles['label-payment']} w-75 d-flex align-items-center form-check-label`}
          htmlFor="flexCheckDefaultEasy"
        >
          <div>
            <img
              className=" me-3 w-25"
              src="https://cdn.staff.am/staff.am/upload/0/7/b/e/07be6107.png"
              alt=""
            />
            EasyPay
          </div>
        </label>
      </div>
      <div className="form-check d-flex justify-content-start align-items-center mb-4">
        <input
          className={`form-check-input me-2 ${styles['inputs']}`}
          type="radio"
          name="payment"
          id="flexCheckDefaultEasy"
          defaultChecked={true}
        />

        <label
          className={`${styles['label-payment']} w-75 d-flex align-items-center form-check-label`}
          htmlFor="flexCheckDefaultEasy"
        >
          <div className="fw-bold">
            <img
              className="ms-3 me-4"
              src="https://4u.am/images/cash.png"
              alt=""
            />
            Cash
          </div>
        </label>
      </div>
    </div>
  );
}

export default Payment;
