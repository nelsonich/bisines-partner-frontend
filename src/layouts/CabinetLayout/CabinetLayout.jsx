import React from 'react';
import styles from './CabinetLayout.module.scss';
import Footer from '~layouts/_partial/Footer';
import TopBar from '~layouts/_partial/TopBar';
import MenuSection from './MenuSection';
import useAuth from '~hooks/useAuth';
import ContentSection from './ContentSection';

function CabinetLayout({ title, iconClassName, children }) {
  const { user } = useAuth();

  return (
    <>
      <TopBar />

      <div className="pt-4 pb-5">
        <div className="container">
          <div className={`row ${styles['cabinet-header']}`}>
            <div className={styles['info']}>
              <h2>{`${user?.first_name} ${user?.last_name}`}</h2>
              <h6>{user?.email}</h6>
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <div className={`row ${styles['cabinet-content']}`}>
                <div className="col-md-8 col-lg-6 col-xl-3 mt-3">
                  <MenuSection />
                </div>

                <div className="col-md-10 col-lg-6 col-xl-9 mt-3">
                  <ContentSection iconClassName={iconClassName} title={title}>
                    {children}
                  </ContentSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CabinetLayout;
