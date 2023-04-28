import React, { useState } from 'react';
import styles from './SignUpScreen.module.scss';
import PhoneInput from 'react-phone-number-input';
import AuthLayout from '~layouts/AuthLayout';
import Input from '~components/Input';
import Dropdown from '~components/Dropdown';
import useAuth from '~hooks/useAuth';
import useTranslation from '~hooks/useTranslation';

const GENDER_MALE = 'male';
const GENDER_FEMALE = 'female';

function SignUpScreen() {
  const { register } = useAuth();
  const { t } = useTranslation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+7');
  const [gender, setGender] = useState(GENDER_MALE);
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState('');
  const [responseStatus, setResponseStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setGender(GENDER_MALE);
    setEmail('');
    setPhone('+7');
    setPassword('');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    register({
      firstName,
      lastName,
      email,
      phone,
      gender,
      password,
      setMessage,
      setErrors,
      setResponseStatus,
      resetForm,
      setLoading,
    });
  };

  return (
    <AuthLayout
      onSubmit={onSubmit}
      formType="register"
      loading={loading}
      title={t('register-page@title')}
      buttonText={t('button@submit')}
      message={message}
      errors={errors}
      responseStatus={responseStatus}
    >
      <div className="form-outline mb-4">
        <Input
          id={'first_name'}
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          label={t('label@first_name')}
        />

        {errors?.first_name?.map((item) => (
          <p
            key={`error-register-firstname-${item}`}
            className={styles['error-text']}
          >
            {t(`register@${item}`)}
          </p>
        ))}
      </div>

      <div className="form-outline mb-4">
        <Input
          id={'last_name'}
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          label={t('label@last_name')}
        />

        {errors?.last_name?.map((item) => (
          <p
            key={`error-register-lastname-${item}`}
            className={styles['error-text']}
          >
            {t(`register@${item}`)}
          </p>
        ))}
      </div>

      <div className="form-outline mb-4">
        <Input
          id={'email'}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          label={t('label@email')}
        />

        {errors?.email?.map((item) => (
          <p
            key={`error-register-email-${item}`}
            className={styles['error-text']}
          >
            {t(`register@${item}`)}
          </p>
        ))}
      </div>

      <div className="form-outline mb-4">
        <PhoneInput
          placeholder={t('placeholder@phone')}
          className="mb-3"
          countries={['RU']}
          defaultCountry="RU"
          value={phone}
          onChange={setPhone}
        />

        {errors?.phone?.map((item) => (
          <p
            key={`error-register-phone-${item}`}
            className={styles['error-text']}
          >
            {t(`register@${item}`)}
          </p>
        ))}
      </div>

      <div className="form-outline mb-4">
        <Dropdown
          label={t('label@gender')}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          options={[
            {
              label: t('gender_value@male'),
              value: GENDER_MALE,
            },
            {
              label: t('gender_value@female'),
              value: GENDER_FEMALE,
            },
          ]}
        />

        {errors?.gender?.map((item) => (
          <p
            key={`error-register-gender-${item}`}
            className={styles['error-text']}
          >
            {t(`register@${item}`)}
          </p>
        ))}
      </div>

      <div className="form-outline mb-4">
        <Input
          type="password"
          id={'password'}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label={t('label@password')}
        />

        {errors?.password?.map((item) => (
          <p
            key={`error-register-password-${item}`}
            className={styles['error-text']}
          >
            {t(`register@${item}`)}
          </p>
        ))}
      </div>
    </AuthLayout>
  );
}

export default SignUpScreen;
