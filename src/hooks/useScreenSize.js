import { useCallback, useEffect, useState } from 'react';

const responsiveSizes = {
  xxs: { min: 0, max: 375 },
  xs: { min: 376, max: 575 },
  sm: { min: 576, max: 767 },
  md: { min: 768, max: 991 },
  lg: { min: 992, max: 1199 },
  xl: { min: 1200, max: 1449 },
  xxl: { min: 1450, max: Infinity },
};

// screens
const screenMobileMinName = 'xxs';
const screenMobileMaxName = 'sm';
export const screenMobileMin = responsiveSizes[screenMobileMinName]['min'];
export const screenMobileMax = responsiveSizes[screenMobileMaxName]['max'];

const screenTabletMinName = 'md';
const screenTabletMaxName = 'lg';
export const screenTabletMin = responsiveSizes[screenTabletMinName]['min'];
export const screenTabletMax = responsiveSizes[screenTabletMaxName]['max'];

const screenDesktopMinName = 'xl';
const screenDesktopMaxName = 'xxl';
export const screenDesktopMin = responsiveSizes[screenDesktopMinName]['min'];
export const screenDesktopMax = responsiveSizes[screenDesktopMaxName]['max'];

function useScreenSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const onResize = useCallback(() => {
    setSize((oldState) => {
      const newState = { width: window.innerWidth, height: window.innerHeight };
      if (
        newState.width === oldState.width &&
        newState.height === oldState.height
      ) {
        return oldState;
      }

      return newState;
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    onResize();

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return size;
}

export default useScreenSize;
