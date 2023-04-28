import styles from './SlideDrawerContainer.module.scss';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useServerSide from '~hooks/useServerSide';

const delayed = (callback) => {
  setTimeout(callback, 300);
};

function SlideDrawerContainer({ title, children, onClose, direction, width }) {
  const { isServerSide } = useServerSide();

  const [containerOpened, setContainerOpened] = useState(false);
  const [contentOpened, setContentOpened] = useState(false);

  const finalContainerClassName = useMemo(() => {
    const classNameList = [
      styles['slide-drawer-container'],
      styles[`slide-drawer-direction-${direction}`],
    ];

    if (containerOpened) {
      classNameList.push(styles['slide-drawer-container-opened']);
    }

    return classNameList.join(' ');
  }, [containerOpened, direction]);

  const finalContentClassName = useMemo(() => {
    const classNameList = [styles['slide-drawer-content']];
    if (contentOpened) {
      classNameList.push(styles['slide-drawer-content-opened']);
    }

    return classNameList.join(' ');
  }, [contentOpened]);

  useEffect(() => {
    if (isServerSide) {
      return;
    }

    setContainerOpened(true);
    delayed(() => {
      setContentOpened(true);
    });

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const onSliderClose = useCallback(() => {
    setContentOpened(false);
    delayed(() => {
      setContainerOpened(false);

      if (typeof onClose !== 'function') {
        return;
      }

      setTimeout(() => {
        onClose();
      }, 200);
    });
  }, [onClose]);

  return (
    <div className={finalContainerClassName}>
      <div
        className={styles['slide-drawer-empty']}
        style={{ width: `calc(100% - ${width})` }}
        onClick={onSliderClose}
      />

      <div className={finalContentClassName} style={{ width }}>
        <div className={styles['slide-drawer-content-header']}>
          <div className={styles['slide-drawer-header-title']}>{title}</div>

          <div
            className={styles['slide-drawer-header-close']}
            onClick={onSliderClose}
          >
            <i className="fa-solid fa-xmark" />
          </div>
        </div>

        <div className={styles['slide-drawer-content-body']}>{children}</div>
      </div>
    </div>
  );
}

export default SlideDrawerContainer;
