import { useContext } from 'react';
import CategoriesContext from '~contexts/CategoriesContext';

function useCategories() {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error('useCategories must be used within an CategoriesProvider');
  }

  return context;
}

export default useCategories;
