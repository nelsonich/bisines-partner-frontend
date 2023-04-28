import React from 'react';
import PageSeo from '~components/PageSeo';
import useTranslation from '~hooks/useTranslation';
import SingleProductScreen from '~screens/SingleProductScreen';
import { getProduct, getOtherProductsByCategory } from '~apis/products';

function ProductById(props) {
  const { t } = useTranslation();

  return (
    <>
      <PageSeo title={t('home-page@page-title')} />
      <SingleProductScreen {...props} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { key, id } = context.params;

  const otherProductsData = await getOtherProductsByCategory({
    categoryKey: key,
    productId: id,
  });
  const productData = await getProduct({ id });

  const [product, otherProducts] = await Promise.all([
    productData.json(),
    otherProductsData.json(),
  ]);

  return {
    props: {
      product: product.product,
      otherProducts: otherProducts.other_products,
    },
  };
}

export default ProductById;
