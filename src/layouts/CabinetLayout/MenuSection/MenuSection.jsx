import React from 'react';
import styles from './MenuSection.module.scss';
import NavLink from '~components/NavLink';
import userLinks from '~constants/userLinks';
import useTranslation from '~hooks/useTranslation';

function MenuSection() {
  const { t } = useTranslation();

  return (
    <div className="list-group w-100">
      {userLinks.map((userLink, index) => (
        <NavLink
          key={`NavBar-userLink-${index}`}
          className={`${styles['nav-link']} m-0 me-4 list-group-item list-group-item-action`}
          activeClassName={styles['active-link']}
          link={userLink.link}
        >
          {t(userLink.text)}
        </NavLink>
      ))}
    </div>
  );
}

export default MenuSection;
