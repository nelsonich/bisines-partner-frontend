import styles from './RootPortal.module.scss';
import React from 'react';
import { createPortal } from 'react-dom';
import useServerSide from '~hooks/useServerSide';

function RootPortal({ children }) {
  const { isServerSide } = useServerSide();
  if (isServerSide) {
    return children;
  }

  return createPortal(
    <div className={styles['root-portal']}>{children}</div>,
    document.body
  );
}

export default RootPortal;
