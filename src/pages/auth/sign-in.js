import React from 'react';
import PageSeo from '~components/PageSeo';
import SignInScreen from '~screens/SignIn/SignInScreen';

function SignIn(props) {
  return (
    <>
      <PageSeo title="Sign in" />

      <SignInScreen {...props} />
    </>
  );
}

export default SignIn;
