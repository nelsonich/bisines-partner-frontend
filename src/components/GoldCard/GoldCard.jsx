import React from 'react';
import styles from './GoldCard.module.scss';

function GoldCard({ children, width = '100px', height = '25px', ...rest }) {
  return (
    <button
      className={styles['gold-box']}
      style={{ width: width, height: height }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default GoldCard;
