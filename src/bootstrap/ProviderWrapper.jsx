import React from 'react';
import {
  PreloadingProvider,
  PreloadingHandler,
} from '~providers/PreloadingProvider';
import TranslationProvider from '~providers/TranslationProvider';
import AuthProvider from '~providers/AuthProvider';
import CategoriesProvider from '~providers/CategoriesProvider';

function ProviderWrapper({ pageProps, children }) {
  return (
    <PreloadingProvider loadable={['AuthProvider', 'CategoriesProvider']}>
      <TranslationProvider>
        <AuthProvider>
          <CategoriesProvider>
            <PreloadingHandler>
              <>{children}</>
            </PreloadingHandler>
          </CategoriesProvider>
        </AuthProvider>
      </TranslationProvider>
    </PreloadingProvider>
  );
}

export default ProviderWrapper;
