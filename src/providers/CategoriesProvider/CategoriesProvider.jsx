import React, { useCallback, useEffect, useState } from 'react';
import * as categoriesApi from '~apis/categories';
import CategoriesContext from '~contexts/CategoriesContext';
import usePreloading from '~hooks/usePreloading';

function CategoriesProvider({ children }) {
  const { finishLoading } = usePreloading();
  const [categories, setCategories] = useState([]);

  const loadCategories = useCallback(async () => {
    const response = await categoriesApi.getCategories();
    const result = await response.json();

    setCategories(result.categories);
    finishLoading('CategoriesProvider');
  }, []);

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      <>{children}</>
    </CategoriesContext.Provider>
  );
}

export default CategoriesProvider;
