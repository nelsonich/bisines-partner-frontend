import React, { useCallback, useMemo, useState } from 'react';
import PreloadingContext from '~contexts/PreloadingContext';

function PreloadingProvider({ loadable, children }) {
  const [loadingList, setLoadingList] = useState(() =>
    loadable.reduce((acc, item) => ({ ...acc, [item]: true }), {})
  );

  const isLoading = useMemo(() => {
    const values = Object.values(loadingList);
    for (const value of values) {
      if (value) {
        return true;
      }
    }

    return false;
  }, [loadingList]);

  const finishLoading = useCallback((name) => {
    setLoadingList((old) => ({ ...old, [name]: false }));
  }, []);

  return (
    <PreloadingContext.Provider
      value={{ isFinished: !isLoading, finishLoading }}
    >
      {children}
    </PreloadingContext.Provider>
  );
}

export default PreloadingProvider;
