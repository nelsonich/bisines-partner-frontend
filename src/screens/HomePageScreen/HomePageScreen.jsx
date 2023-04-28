import React from 'react';
import MainLayout from '~layouts/MainLayout';
import HomeAboutUs from './HomeAboutUs';
import Categories from './Categories';
import HomeFlowers from './HomeFlowers/HomeFlowers';
import OurCustomerReview from './HomeOurCustomerReview';
import SpecialProducts from './SpecialProducts';

function HomePageScreen({ products, reviews }) {
  return (
    <MainLayout>
      <HomeFlowers />
      <HomeAboutUs />
      <SpecialProducts products={products} />
      <OurCustomerReview reviews={reviews} />
      <Categories />
    </MainLayout>
  );
}

export default HomePageScreen;

// export async function getServerSideProps() {
//   const promisesRequests = [http.get('/api/users/get'), http.get('/reviews')];
//   const responses = await Promise.all(promisesRequests);

//   const promisesResults = responses.map((response) => response.json());
//   const results = await Promise.all(promisesResults);

//   return {
//     props: {
//       homeSlides: results[0],
//       reviews: results[1],
//     },
//   };
// }
