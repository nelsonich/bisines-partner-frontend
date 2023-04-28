import React, { useCallback, useEffect, useState } from 'react';
import styles from './TopBar.module.scss';
import AnchorLink from '~components/AnchorLink';
import useTranslation from '~hooks/useTranslation';
import Button from '~components/Button';
import useAuth from '~hooks/useAuth';
import ContactInfos from './ContactInfos';
import SocialLinks from './SocialLinks';
import LanguageFlags from './LanguageFlags';
import UserMenu from '../Header/UserMenu';

function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLogged } = useAuth();

  const { t } = useTranslation();

  const handleScroll = useCallback((event) => {
    window.scrollY > 250
      ? setIsScrolled(!isScrolled)
      : setIsScrolled(isScrolled);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg bg-light ${styles['top-bar']}`}>
      <div className={`container ${styles['container-top-bar']}`}>
        <div
          className={`${styles['location-links']} d-flex align-items-center`}
        >
          <AnchorLink className="navbar-brand" href="/">
            <div className={`${styles['logo-block']}`}>BisinesPartner</div>
          </AnchorLink>

          <ContactInfos />
        </div>

        <div
          className={`d-flex justify-content-between align-items-center ${styles['top-bar-responsive-icons']}`}
        >
          <div className={styles['top-bar-links-items']}>
            <SocialLinks />
            <LanguageFlags />
          </div>

          <div className={styles['icon-left']}>
            {!isLogged ? (
              <div className={styles['btn-top-bor']}>
                <AnchorLink href="/auth/sign-in">
                  <Button width="140px" height="40px">
                    {t('layouts-top-bar@login')}
                  </Button>
                </AnchorLink>
              </div>
            ) : (
              <UserMenu />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
