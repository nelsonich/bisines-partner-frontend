import React from 'react';
import PageSeo from '~components/PageSeo';
import SignUpScreen from '~screens/SignUp/SignUpScreen';

function SignUp(props) {
  return (
    <>
      <PageSeo title="Sign Up" />

      <SignUpScreen {...props} />
    </>
  );
}

export default SignUp;
