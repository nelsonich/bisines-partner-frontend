import { useContext } from 'react';
import PreloadingContext from '~contexts/PreloadingContext';

function usePreloading() {
  const context = useContext(PreloadingContext);
  if (!context) {
    throw new Error('usePreloading must be used within an PreloadingProvider');
  }

  return context;
}

export default usePreloading;
