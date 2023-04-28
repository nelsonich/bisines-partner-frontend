import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '~contexts/AuthContext';
import usePreloading from '~hooks/usePreloading';
import { getStorage, removeStorage, setStorage } from '~services/storage';
import useAuthStore from '~stores/useAuthStore';
import useShoppingCartStore from '~stores/useShoppingCartStore';
import * as authApi from '~apis/auth';
import { setDefaultHeader } from '~services/http';

function AuthProvider({ children }) {
  const router = useRouter();
  const { finishLoading } = usePreloading();

  const [loading, setLoading] = useState(true);
  const authStore = useAuthStore();
  const { setProducts } = useShoppingCartStore();

  const { setAuthSuccess, user, isLogged } = authStore;

  useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    const accessToken = getStorage('access_token');

    if (accessToken) {
      setDefaultHeader('Authorization', `Bearer ${accessToken}`);

      const response = await authApi.me();
      const result = await response.json();

      setAuthSuccess(true, result.user);
      setLoading(false);
      setProducts(result.products);
    } else {
      setLoading(false);
    }

    finishLoading('AuthProvider');
  };

  const login = async ({ email, password, setErrors, setLoading }) => {
    setLoading(true);

    const onError = (response) => {
      if (typeof setErrors === 'function') {
        setErrors(response.errors);
      }
    };

    const onSuccess = (response) => {
      setAuthSuccess(true, response.user, response.wallet);
      setProducts(response.products);
      setStorage('access_token', response.access_token);
      setDefaultHeader('Authorization', `Bearer ${response.access_token}`);

      router.push({
        pathname: '/cabinet/profile',
      });
    };

    const response = await authApi.signIn({
      email,
      password,
      setErrors,
      setLoading,
    });
    const result = await response.json();

    if (result.status === 'success') {
      onSuccess(result);
    } else {
      onError(result);
    }

    setLoading(false);
  };

  const register = async ({ ...props }) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      gender,
      setMessage,
      setErrors,
      setResponseStatus,
      resetForm,
      setLoading,
    } = props;

    setLoading(true);

    const onError = (response) => {
      setMessage(response.message);
      setErrors(response.errors);
      setResponseStatus('failure');
    };

    const onSuccess = (response) => {
      setMessage(response.message);
      setErrors([]);
      setResponseStatus(response.status);
      resetForm();
    };

    const response = await authApi.signUp({
      firstName,
      lastName,
      email,
      phone,
      password,
      gender,
    });

    const result = await response.json();

    if (result.status === 'success') {
      onSuccess(result);
    } else {
      onError(result);
    }

    setLoading(false);
  };

  const logout = async () => {
    const response = await authApi.logout();
    const result = await response.json();

    if (result.status === 'success') {
      removeStorage('access_token');

      router.push({
        pathname: '/auth/sign-in',
      });

      setAuthSuccess(false, null);
      setProducts([]);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, user, loading, login, register, logout }}
    >
      <>{children}</>
    </AuthContext.Provider>
  );
}

export default AuthProvider;
