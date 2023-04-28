import React from 'react';
import PageSeo from '~components/PageSeo';
import ChangePasswordScreen from '~screens/ChangePasswordScreen';

function ChangePassword(props) {
  return (
    <>
      <PageSeo title="Change Password" />
      <ChangePasswordScreen {...props} />
    </>
  );
}

ChangePassword.auth = true;

export default ChangePassword;
