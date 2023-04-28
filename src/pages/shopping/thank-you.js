import React from 'react';
import PageSeo from '~components/PageSeo';
import ThankYouScreen from '~screens/ThankYouScreen';

function ThankYou(props) {
  return (
    <>
      <PageSeo title="Thank you" />
      <ThankYouScreen {...props} />
    </>
  );
}

export default ThankYou;
