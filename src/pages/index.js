import React from 'react';
import { getProducts } from '~apis/products';
import { getReviews } from '~apis/reviews';
import PageSeo from '~components/PageSeo';
import useTranslation from '~hooks/useTranslation';
import HomePageScreen from '~screens/HomePageScreen';

function HomePage(props) {
  const { t } = useTranslation();

  return (
    <>
      <PageSeo title={t('home-page@page-title')} />
      <HomePageScreen {...props} />
    </>
  );
}

export async function getServerSideProps(context) {
  const productsData = await getProducts();
  const reviewsData = await getReviews();

  const [products, reviews] = await Promise.all([
    productsData.json(),
    reviewsData.json(),
  ]);

  return {
    props: {
      products: products.products,
      reviews: reviews.reviews,
    },
  };
}

export default HomePage;
