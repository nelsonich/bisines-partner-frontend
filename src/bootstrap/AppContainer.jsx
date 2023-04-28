import React, { Fragment } from 'react';
import AuthChecker from './AuthChecker';

function AppContainer({ Component, ...pageProps }) {
  const Wrapper = Component.auth ? AuthChecker : Fragment;
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default AppContainer;
