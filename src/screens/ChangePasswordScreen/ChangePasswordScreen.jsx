import React, { useState } from 'react';
import styles from './ChangePasswordScreen.module.scss';
import CabinetLayout from '~layouts/CabinetLayout';
import Button from '~components/Button';
import Input from '~components/Input';
import * as changePasswordApi from '~apis/change-password';
import useTranslation from '~hooks/useTranslation';

function ChangePasswordScreen() {
  const { t } = useTranslation();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);
  const [responseStatus, setResponseStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const request = await changePasswordApi.change({
      oldPassword,
      newPassword,
    });
    const response = await request.json();

    if (response.status === 'success') {
      setResponseStatus(response.status);
      setMessage('successfully_updated_password');
      setErrors([]);
      setNewPassword('');
      setOldPassword('');
    } else {
      setMessage(response.message);
      setErrors(response.errors);
      setResponseStatus('failure');
    }

    setLoading(false);
  };

  return (
    <CabinetLayout
      title={t('cabinet-menu-section@change_password')}
      iconClassName="fa-solid fa-key"
    >
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={onSubmit}>
            <div className="form-outline mb-3">
              <Input
                type="password"
                id="old_password"
                onChange={(e) => setOldPassword(e.target.value)}
                label={t('label@old_password')}
                value={oldPassword}
              />

              {errors?.old_password?.length > 0 &&
                errors?.old_password.map((item) => (
                  <p
                    key={`error-change-password-old-${item}`}
                    className={styles[responseStatus]}
                  >
                    {t(`change-password@${item}`)}
                  </p>
                ))}
            </div>

            <div className="form-outline mb-3">
              <Input
                type="password"
                id={'new_password'}
                onChange={(e) => setNewPassword(e.target.value)}
                label={t('label@new_password')}
                value={newPassword}
              />

              {errors?.new_password?.length > 0 &&
                errors?.new_password.map((item) => (
                  <p
                    key={`error-change-password-new-${item}`}
                    className={styles[responseStatus]}
                  >
                    {t(`change-password@${item}`)}
                  </p>
                ))}
            </div>

            {!!responseStatus && errors.length === 0 && (
              <p className={styles[responseStatus]}>
                {t(`change-password@${message}`)}
              </p>
            )}

            <Button type="submit" disabled={loading}>
              {t('button@submit')}
            </Button>
          </form>
        </div>
      </div>
    </CabinetLayout>
  );
}

export default ChangePasswordScreen;
