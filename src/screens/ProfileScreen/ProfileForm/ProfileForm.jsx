import React, { useState, useEffect } from 'react';
import styles from './ProfileForm.module.scss';
import Button from '~components/Button';
import Input from '~components/Input';
import Dropdown from '~components/Dropdown';
import useAuth from '~hooks/useAuth';
import useTranslation from '~hooks/useTranslation';
import * as profileApi from '~apis/profile';

function ProfileForm() {
  const { t } = useTranslation();
  const { user, loading } = useAuth();

  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState('');
  const [responseStatus, setResponseStatus] = useState('');

  useEffect(() => {
    if (!loading) {
      setFirstName(user?.first_name);
      setLastName(user?.last_name);
      setEmail(user?.email);
      setPhone(user.phone ? user.phone : '');
      setGender(user?.gender);
    }
  }, [loading]);

  const onError = (response) => {
    setMessage(response.message);
    setErrors(response.errors);
    setResponseStatus('failure');
  };

  const onSuccess = (response) => {
    setMessage(response.message);
    setErrors([]);
    setResponseStatus(response.status);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);

    const request = await profileApi.edit({ firstName, lastName, gender });
    const response = await request.json();

    if (response.status === 'success') {
      onSuccess(response);
    } else {
      onError(response);
    }

    setSubmitted(false);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <form onSubmit={onSubmit}>
          <div className="form-outline mb-3">
            <Input
              id={'first_name'}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              label={t('label@first_name')}
            />

            {errors?.first_name?.map((item) => (
              <p
                key={`error-profile-firstname-${item}`}
                className={styles['error-text']}
              >
                {t(`profile-update-info@${item}`)}
              </p>
            ))}
          </div>

          <div className="form-outline mb-3">
            <Input
              id={'last_name'}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              label={t('label@last_name')}
            />

            {errors?.last_name?.map((item) => (
              <p
                key={`error-profile-lastname-${item}`}
                className={styles['error-text']}
              >
                {t(`profile-update-info@${item}`)}
              </p>
            ))}
          </div>

          <div className="form-outline mb-3">
            <Dropdown
              id={'gender'}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              label={t('label@gender')}
              options={[
                {
                  label: t('gender_value@male'),
                  value: 'male',
                },
                {
                  label: t('gender_value@female'),
                  value: 'female',
                },
              ]}
            />

            {errors?.gender?.map((item) => (
              <p
                key={`error-profile-gender-${item}`}
                className={styles['error-text']}
              >
                {t(`profile-update-info@${item}`)}
              </p>
            ))}
          </div>

          {errors.length === 0 && responseStatus !== '' && (
            <p className={styles[responseStatus]}>
              {t(`profile-update-info@${message}`)}
            </p>
          )}

          <Button type="submit" disabled={submitted}>
            {t('button@submit')}
          </Button>
        </form>
      </div>

      <div className="col-md-6">
        <div className={styles['not-changeable-section']}>
          <div className="form-outline mb-3">
            <Input
              id={'email'}
              value={email}
              label={t('label@email')}
              disabled={true}
            />
          </div>

          <div className="form-outline mb-3">
            <Input
              id={'phone'}
              value={phone}
              label={t('label@phone')}
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileForm;
