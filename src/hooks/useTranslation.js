import { useContext } from 'react';
import TranslationContext from '~contexts/TranslationContext';

function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(
      'useTranslation must be used within an TranslationProvider'
    );
  }

  return context;
}

export default useTranslation;
