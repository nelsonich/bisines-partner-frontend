import React from 'react';
import AnchorLink from '~components/AnchorLink';

import headerLinks from '~constants/headerLinks';
import styles from './MenuResponse.module.scss';
function MenuResponse() {
  return (
    <>
      <button
        className={`navbar-toggler ${styles['toggler-icon']}`}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight1"
        aria-controls="offcanvasRight1"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className={`${styles['ovcanvas-design']} offcanvas offcanvas-end navbar-toggler`}
        tabIndex="-1"
        id="offcanvasRight1"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="container">
          <div className={`${styles['response-menu-bisines-partner']} pt-4`}>
            <h5>BisinesPartner</h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
        </div>
        <div className="offcanvas-header">
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
              {headerLinks.map((headerLink, index) => (
                <li key={`NavBar-headerLink-${index}`} className="nav-item">
                  <AnchorLink
                    className={`nav-link fs-6`}
                    href={headerLink.link}
                  >
                    {headerLink.text}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuResponse;
