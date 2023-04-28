import React from 'react';
import usePreloading from '~hooks/usePreloading';

function PreloadingHandler({ children }) {
  const { isFinished } = usePreloading();
  if (isFinished) {
    return children;
  }

  return <div>Loading, please wait ...</div>;
}

export default PreloadingHandler;
