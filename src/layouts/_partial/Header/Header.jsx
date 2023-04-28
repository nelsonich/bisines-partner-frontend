import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AnchorLink from '~components/AnchorLink';
import NavLink from '~components/NavLink';
import headerLinks from '~constants/headerLinks';
import styles from './Header.module.scss';
import HeaderCart from './HeaderCart/HeaderCart';
import MenuResponse from './MenuResponse';
import useTranslation from '~hooks/useTranslation';
import useCategories from '~hooks/useCategories';
import useAuth from '~hooks/useAuth';
import Button from '~components/Button';
import UserMenu from './UserMenu';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, locale } = useTranslation();

  const { isLogged } = useAuth();
  const { categories } = useCategories();

  const handleScroll = useCallback((event) => {
    setIsScrolled(window.scrollY > 140);
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

  const links = useMemo(() => {
    return [
      ...headerLinks,
      ...categories.map((category) => ({
        link: `/categories/${category.key}/products`,
        text: category.translations[locale],
      })),
    ];
  }, [locale]);

  const parentClass = useMemo(() => {
    const classList = [];
    if (isScrolled) {
      classList.push(styles['header-scroll-bar-open']);
    }

    return classList.join(' ');
  }, [isScrolled]);

  return (
    <div className={parentClass}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <nav className={`navbar navbar-expand-lg ${styles['header-box']}`}>
            <div className="justify-content-center p-0">
              <div
                className="collapse navbar-collapse justify-content-start"
                id="navbarSupportedContent"
              >
                <ul
                  className={`navbar-nav mb-2 mb-lg-0 ${styles['menu-item-box']}`}
                >
                  {links.map((headerLink, index) => (
                    <li
                      key={`NavBar-headerLink-${index}`}
                      className={`nav-item`}
                    >
                      <NavLink
                        className={`nav-link ${styles['nav-link']} m-0 me-4`}
                        activeClassName={styles['active-link']}
                        link={headerLink.link}
                      >
                        {t(headerLink.text)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <MenuResponse />
            </div>
          </nav>

          <div className="d-flex align-items-center">
            <HeaderCart />

            {isScrolled && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
