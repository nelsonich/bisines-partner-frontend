import React from 'react';
import PageSeo from '~components/PageSeo';
import ResetPasswordScreen from '~screens/ResetPassword/ResetPasswordScreen';

function ResetPassword(props) {
  return (
    <>
      <PageSeo title="Reset password" />

      <ResetPasswordScreen {...props} />
    </>
  );
}

export default ResetPassword;
