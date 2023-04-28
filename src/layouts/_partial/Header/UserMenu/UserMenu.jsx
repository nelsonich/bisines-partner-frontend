import React from 'react';
import styles from './UserMenu.module.scss';
import AnchorLink from '~components/AnchorLink';
import useAuth from '~hooks/useAuth';
import useTranslation from '~hooks/useTranslation';
import userLinks from '~constants/userLinks';

function UserMenu() {
  const { t } = useTranslation();

  const { user, logout } = useAuth();

  return (
    <div className="dropdown">
      <button
        className={`dropdown-toggle ${styles['button-user-icon']}`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className={styles['my-name-user-menu']}>
          {`${user?.first_name} ${user?.last_name}`}
        </span>
      </button>{' '}
      <ul className={`${styles['drop-menu-position']} dropdown-menu`}>
        {userLinks.map((item, index) => (
          <li key={`UserMenu-Item-${index}`}>
            <AnchorLink className="dropdown-item" href={item.link}>
              {t(item.text)}
            </AnchorLink>
          </li>
        ))}

        <hr className={`${styles['hr-design']} m-0`} />

        <li>
          <button className="dropdown-item" onClick={logout}>
            {t('button@logout')}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;
