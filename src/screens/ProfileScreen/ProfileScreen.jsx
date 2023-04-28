import React from 'react';
// import styles from './ProfileScreen.module.scss';
import CabinetLayout from '~layouts/CabinetLayout';
import ProfileForm from './ProfileForm';
import useTranslation from '~hooks/useTranslation';

function ProfileScreen() {
  const { t } = useTranslation();

  return (
    <CabinetLayout
      title={t('cabinet-menu-section@profile')}
      iconClassName="fa-solid fa-address-card"
    >
      <ProfileForm />
    </CabinetLayout>
  );
}

export default ProfileScreen;
