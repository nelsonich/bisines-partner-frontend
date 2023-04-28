import React, { useState } from 'react';
import styles from './SignInScreen.module.scss';
import { useRouter } from 'next/router';
import AuthLayout from '~layouts/AuthLayout';
import Input from '~components/Input';
import useTranslation from '~hooks/useTranslation';
import useAuth from '~hooks/useAuth';

function SignInScreen() {
  const router = useRouter();
  const { action, status } = router.query;

  const { t } = useTranslation();

  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    login({ email, password, setErrors, setLoading });
  };

  return (
    <AuthLayout
      formType="login"
      action={action}
      status={status}
      onSubmit={onSubmit}
      loading={loading}
      title={t('login-page@title')}
      buttonText={t('button@submit')}
    >
      <div className="form-outline mb-4">
        <Input
          id={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={t('label@email')}
        />

        {errors?.email?.map((item) => (
          <p key={`error-login-email-${item}`} className={styles['error-text']}>
            {t(`login@${item}`)}
          </p>
        ))}
      </div>

      <div className="form-outline mb-4">
        <Input
          type="password"
          id={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label={t('label@password')}
        />

        {errors?.password?.map((item) => (
          <p
            key={`error-login-password-${item}`}
            className={styles['error-text']}
          >
            {t(`login@${item}`)}
          </p>
        ))}
      </div>
    </AuthLayout>
  );
}

export default SignInScreen;
