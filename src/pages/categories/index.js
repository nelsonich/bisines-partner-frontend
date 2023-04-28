import React from 'react';
// import PageSeo from '~components/PageSeo';
// import useTranslation from '~hooks/useTranslation';
import CategoriesScreen from '~screens/CategoriesScreen';

function Categories(props) {
  // const { t } = useTranslation();

  return (
    <>
      {/* <PageSeo title={t('home-page@page-title')} /> */}
      <CategoriesScreen {...props} />
    </>
  );
}

export default Categories;
