import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '~hooks/useAuth';

function AuthChecker({ children }) {
  const router = useRouter();

  const { isLogged, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isLogged) {
      router.push({
        pathname: '/auth/sign-in',
      });
    }
  }, [loading]);

  if (loading || !isLogged) {
    return <div>Waiting for session...</div>;
  }

  return children;
}

export default AuthChecker;
