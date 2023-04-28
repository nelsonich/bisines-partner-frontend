import React, { useEffect, useCallback } from 'react';
import PageSeo from '~components/PageSeo';
import UpdatePasswordScreen from '~screens/UpdatePassword';
import * as resetPasswordApi from '~apis/reset-password';
import { useRouter } from 'next/router';

function UpdatePassword() {
  const router = useRouter();
  const { token } = router.query;

  const findToken = useCallback(async (token) => {
    const request = await resetPasswordApi.find({ token });
    await request.json();
  }, []);

  useEffect(() => {
    if (undefined !== token) {
      findToken(token);
    }
  }, [token]);

  return (
    <>
      <PageSeo title="Reset Password" />
      <UpdatePasswordScreen token={token} />
    </>
  );
}

export default UpdatePassword;
