import React, { useEffect } from 'react';
import ProviderWrapper from '~bootstrap/ProviderWrapper';
import AppContainer from '~bootstrap/AppContainer';
import '~assets/styles/global.scss';

function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // eslint-disable-next-line global-require
      require('bootstrap/dist/js/bootstrap');
    }
  }, []);

  return (
    <ProviderWrapper>
      <AppContainer Component={Component} {...pageProps} />
    </ProviderWrapper>
  );
}

export default App;
