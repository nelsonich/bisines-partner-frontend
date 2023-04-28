import React, { useCallback, useEffect } from 'react';
import {
  STATE_LOADED,
  STATE_LOADING,
  STATE_READY,
} from '~contexts/PreloadingContext';
import usePreloading from '~hooks/usePreloading';
import useServerSide from '~hooks/useServerSide';
import styles from './PreLoader.module.scss';
function PreLoader({}) {
  const { loadingState, setLoadingState } = usePreloading();
  const { isServerSide } = useServerSide();

  const triggerFinish = useCallback(() => {
    setTimeout(() => {
      setLoadingState(STATE_LOADED);

      setTimeout(() => {
        setLoadingState(STATE_READY);
      }, 200);
    }, 500);
  }, []);

  useEffect(() => {
    if (isServerSide) {
      return;
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', triggerFinish);
    } else {
      triggerFinish();
    }
  }, []);

  const isLoading = loadingState === STATE_LOADING;
  if (!isLoading) {
    return null;
  }

  return (
    <div className={styles['big-box-pre-loader']}>
      <div className={styles['lds-roller']}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default PreLoader;
