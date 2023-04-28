import React from 'react';
import PageSeo from '~components/PageSeo';
import useTranslation from '~hooks/useTranslation';
import ProductsByCategoryScreen from '~screens/ProductsByCategoryScreen';

function ProductsByCategory(props) {
  const { t } = useTranslation();

  return (
    <>
      <PageSeo title={t('home-page@page-title')} />
      <ProductsByCategoryScreen {...props} />
    </>
  );
}

export default ProductsByCategory;
