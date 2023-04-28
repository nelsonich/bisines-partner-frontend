import React, { useState } from 'react';
import styles from './ResetPasswordScreen.module.scss';
import AuthLayout from '~layouts/AuthLayout';
import Input from '~components/Input';
import useTranslation from '~hooks/useTranslation';
import * as resetPasswordApi from '~apis/reset-password';

function ResetPasswordScreen() {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const [responseStatus, setResponseStatus] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const response = await resetPasswordApi.create({ email });
    const result = await response.json();

    if (result.status === 'success') {
      setResponseStatus(result.status);
      setMessage('successfully_send_email_message');
      setErrors([]);
      setEmail('');
    } else {
      setMessage(result.message);
      setErrors([result.errors]);
      setResponseStatus('failure');
    }

    setLoading(false);
  };

  return (
    <AuthLayout
      formType="reset-password"
      onSubmit={onSubmit}
      loading={loading}
      title={t('reset-password-page@title')}
      buttonText={t('button@submit')}
    >
      <div className="form-outline mb-4">
        <Input
          id={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={t('label@email')}
        />

        {(!!responseStatus || errors.length > 0) && (
          <p className={styles[responseStatus]}>
            {t(`reset-password@${message}`)}
          </p>
        )}
      </div>
    </AuthLayout>
  );
}

export default ResetPasswordScreen;
