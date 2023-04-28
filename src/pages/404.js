import React from 'react';
import PageSeo from '~components/PageSeo';
import NotFoundScreen from '~screens/NotFoundScreen';

function NotFound(props) {
  return (
    <>
      <PageSeo title="Not found" />

      <NotFoundScreen {...props} />
    </>
  );
}

export default NotFound;
