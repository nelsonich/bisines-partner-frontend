import React, { useMemo } from 'react';
import styles from './SlideDrawer.module.scss';
import RootPortal from '~components/RootPortal';
import SlideDrawerContainer from './SlideDrawerContainer';
import useServerSide from '~hooks/useServerSide';

export const directions = {
  leftToRight: 'left-to-right',
  rightToLeft: 'right-to-left',
};

const availableDirections = Object.values(directions);

const defaultWidth = '75%';

function SlideDrawer({
  title,
  children,
  onClose,
  direction = directions.rightToLeft,
  width = defaultWidth,
}) {
  const { isServerSide } = useServerSide();

  const finalDirection = useMemo(() => {
    if (!availableDirections.includes(direction)) {
      return directions.rightToLeft;
    }

    return direction;
  }, [direction]);

  const finalWidth = useMemo(() => {
    if (!width) {
      return defaultWidth;
    }

    const widthString = width.toString();
    if (/^\d+$/.test(widthString)) {
      return `${widthString}px`;
    }

    if (!/^\d+%$/.test(widthString) && !/^\d+px$/.test(widthString)) {
      return '75%';
    }

    return widthString;
  }, [width]);

  if (isServerSide) {
    return null;
  }

  return (
    <RootPortal>
      <div className={styles['slide-drawer-wrapper']}>
        <SlideDrawerContainer
          title={title}
          direction={finalDirection}
          width={finalWidth}
          onClose={onClose}
        >
          {children}
        </SlideDrawerContainer>
      </div>
    </RootPortal>
  );
}

export default SlideDrawer;
