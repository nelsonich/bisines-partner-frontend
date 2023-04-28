import React, { useMemo } from 'react';
import styles from './Footer.module.scss';
import ContactIcon from '~components/ContactIcon';
import AnchorLink from '~components/AnchorLink';
import * as contactInfo from '~constants/contacts';
import useTranslation from '~hooks/useTranslation';

import imgPaymentMasterCard from '../../../assets/images/payments/mastercard.png';
import imgPaymentVisa from '../../../assets/images/payments/visa.png';
import imgPaymentAmericaExpress from '../../../assets/images/payments/america-express.png';
import imgPaymentIdram from '../../../assets/images/payments/idram.png';
import imgPaymentTellCell from '../../../assets/images/payments/tellcell.png';

function Footer() {
  const { t } = useTranslation();

  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <>
      <footer className={`text-muted ${styles['footer-main']}`}>
        <section className="">
          <div className="container mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-4 ">
                <h6 className="text-uppercase fw-bold mb-4">Bisines Partner</h6>
                <p>
                  <AnchorLink className="text-reset" href="/company/about-us">
                    {t('footer-link@about-us')}
                  </AnchorLink>
                </p>
                <p>
                  <AnchorLink className="text-reset" href="/company/contact-us">
                    {t('footer-link@contact-us')}
                  </AnchorLink>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-4 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  {t('footer-heading@shipping-and-payment')}
                </h6>
                <p>
                  <AnchorLink
                    href="/shopping/shipping-costs"
                    className="text-reset"
                  >
                    {t('footer-heading@shipping-costs')}
                  </AnchorLink>
                </p>

                <div className={styles['images-payment']}>
                  <img draggable={false} src={imgPaymentMasterCard.src} />
                  <img draggable={false} src={imgPaymentVisa.src} />
                  <img draggable={false} src={imgPaymentAmericaExpress.src} />
                  <img draggable={false} src={imgPaymentIdram.src} />
                  <img draggable={false} src={imgPaymentTellCell.src} />
                </div>
              </div>

              <div
                className={`${styles['loc-items']} col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4 `}
              >
                <h6 className="text-uppercase fw-bold mb-4">
                  {t('footer-heading@contact')}
                </h6>
                <div className={styles['phone-links']}>
                  {contactInfo.socials.map((social, index) => (
                    <ContactIcon
                      key={`ContactIcon-${index}-social`}
                      mode="dark"
                      {...social}
                    />
                  ))}
                  {contactInfo.contacts.map((contact, index) => (
                    <ContactIcon
                      key={`ContactIcon-${index}-contact`}
                      mode="dark"
                      {...contact}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>

      <div className={`${styles['footer-copyright']} text-reset`}>
        Copyright &copy; {currentYear} bisines-partner.ru
      </div>
    </>
  );
}

export default Footer;
