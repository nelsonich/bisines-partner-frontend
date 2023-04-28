import React, { useState } from 'react';
import styles from './UpdatePasswordScreen.module.scss';
import AuthLayout from '~layouts/AuthLayout';
import Input from '~components/Input';
import useTranslation from '~hooks/useTranslation';
import * as resetPasswordApi from '~apis/reset-password';

function UpdatePasswordScreen({ token }) {
  const { t } = useTranslation();

  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [responseStatus, setResponseStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const request = await resetPasswordApi.reset({ token, password });
    const response = await request.json();

    if (response.status === 'success') {
      setResponseStatus(response.status);
      setMessage('successfully_updated_password_message');
      setErrors([]);
      setPassword('');
    } else {
      setMessage(response.message);
      setErrors([response.errors]);
      setResponseStatus('failure');
    }

    setLoading(false);
  };

  return (
    <AuthLayout
      formType="update-password"
      onSubmit={onSubmit}
      loading={loading}
      title={t('update-password-page@title')}
      buttonText={t('button@submit')}
    >
      <div className="form-outline mb-4">
        <Input
          id={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label={t('label@new_password')}
        />

        {(!!responseStatus || errors.length > 0) && (
          <p className={styles[responseStatus]}>
            {t(`update-password@${message}`)}
          </p>
        )}
      </div>
    </AuthLayout>
  );
}

export default UpdatePasswordScreen;
