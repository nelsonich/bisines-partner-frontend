import React from 'react';
import PageSeo from '~components/PageSeo';
import AboutUsScreen from '~screens/AboutUsScreen';

function AboutUs(props) {
  return (
    <>
      <PageSeo title="About us" />

      <AboutUsScreen {...props} />
    </>
  );
}

export default AboutUs;
