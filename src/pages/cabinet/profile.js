import React from 'react';
import PageSeo from '~components/PageSeo';
import ProfileScreen from '~screens/ProfileScreen';

function Profile(props) {
  return (
    <>
      <PageSeo title="User Page" />
      <ProfileScreen {...props} />
    </>
  );
}

Profile.auth = true;

export default Profile;
