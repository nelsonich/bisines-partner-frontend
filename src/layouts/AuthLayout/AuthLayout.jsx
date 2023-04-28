import React from 'react';
import styles from './AuthLayout.module.scss';
import Header from '~layouts/_partial/Header';
import Footer from '~layouts/_partial/Footer';
import TopBar from '~layouts/_partial/TopBar';
import AnchorLink from '~components/AnchorLink';
import Button from '~components/Button';
import useTranslation from '~hooks/useTranslation';

function AuthLayout({
  children,

  formType,
  action,
  status,
  onSubmit,
  loading,

  title,
  buttonText,

  message,
  errors,
  responseStatus,
}) {
  const { t } = useTranslation();

  return (
    <>
      <TopBar />
      <Header />

      <section className={`${styles['main-box']} p-5 bg-image`}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4">
                <div className={`card ${styles['card-background-image']}`}>
                  <div className="card-body p-4">
                    {action === 'account_verification' &&
                      status === 'success' && (
                        <p className={`${styles['success']} text-center`}>
                          {t('login-page@account_success_verified_message')}
                        </p>
                      )}

                    <h2 className={`${styles['title']} mb-5`}>{title}</h2>

                    <form onSubmit={onSubmit}>
                      {children}

                      {errors?.length === 0 && responseStatus !== '' && (
                        <p className={styles[responseStatus]}>
                          {t(`register@${message}`)}
                        </p>
                      )}

                      <div className="d-flex justify-content-center">
                        <Button type="submit" disabled={loading}>
                          {buttonText}
                        </Button>
                      </div>

                      {formType === 'register' && (
                        <p className="text-center text-muted mt-3 mb-0">
                          {t('register-page@already_account')}{' '}
                          <AnchorLink
                            href="/auth/sign-in"
                            className="fw-bold text-body"
                          >
                            <u>{t('button@login')}</u>
                          </AnchorLink>
                        </p>
                      )}

                      {formType === 'login' && (
                        <>
                          <p className="text-center text-muted mt-3 mb-0">
                            <AnchorLink
                              href="/auth/reset-password"
                              className="text-dark form-text"
                            >
                              {' '}
                              {t('button@reset_password')}
                            </AnchorLink>
                          </p>

                          <p className="text-center text-muted mt-3 mb-0">
                            {t('login-page@not_account')}{' '}
                            <AnchorLink
                              href="/auth/sign-up"
                              className="text-dark"
                            >
                              <u>{t('button@register')}</u>
                            </AnchorLink>
                          </p>
                        </>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AuthLayout;
