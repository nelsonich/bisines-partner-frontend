import React from 'react';
import styles from './ProductCardCount.module.scss';

function ProductCardCount({ count, increment, decrement }) {
  return (
    <div>
      <div
        className={`${styles['count-box']} d-flex my-3 align-items-center justify-content-evenly`}
      >
        <button
          onClick={decrement}
          className={`${styles['button-add-cart']} btn rounded-circle`}
        >
          -
        </button>

        <input disabled={true} className={'fs-3 mx-1'} value={count} />

        <button
          onClick={increment}
          className={`${styles['button-add-cart']} btn rounded-circle`}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCardCount;
