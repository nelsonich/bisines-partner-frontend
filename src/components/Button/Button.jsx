import React from 'react';
import styles from './Button.module.scss';

function Button({
  children,
  width = '200px',
  height = '50px',
  fontSizes = '15px',
  type = 'button',
  ...rest
}) {
  return (
    <button
      {...rest}
      type={type}
      className={styles['button']}
      style={{
        width: width,
        height: height,
        fontSize: fontSizes,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
