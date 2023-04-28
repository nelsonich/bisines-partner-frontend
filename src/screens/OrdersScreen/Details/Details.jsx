import React from 'react';
import styles from './Details.module.scss';
import useTranslation from '~hooks/useTranslation';

function Details({ recipient }) {
  const { locale, t } = useTranslation();

  return (
    <section className="w-100 pt-4">
      <div className="">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-lg-12 col-xl-12">
            <div className=" text-black">
              <div className="card-body ">
                <div className="row justify-content-between">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <ul className={styles['list-items']}>
                      <li className="text-muted">
                        {t('orders@full-name')}:{' '}
                        <span>{recipient.full_name}</span>
                      </li>
                      <li className="text-muted">
                        {t('orders@phone')}: <span>{recipient.phone}</span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`${styles['box-receiver-big']} col-md-10 col-lg-6 col-xl-5 order-1 order-lg-2`}
                  >
                    <ul className={styles['list-items']}>
                      <li className="text-muted">
                        {t('orders@city')}:{' '}
                        <span>{recipient.city[locale]}</span>
                      </li>
                      <li className="text-muted">
                        {t('orders@address')}: <span>{recipient.address}</span>
                      </li>
                      {recipient.house && (
                        <li className="text-muted">
                          {t('orders@house')}: <span>{recipient.house}</span>
                        </li>
                      )}
                      {recipient.access && (
                        <li className="text-muted">
                          {t('orders@access')}: <span>{recipient.access}</span>
                        </li>
                      )}
                      {recipient.floor && (
                        <li className="text-muted">
                          {t('orders@floor')}: <span>{recipient.floor}</span>
                        </li>
                      )}
                      {recipient.intercom && (
                        <li className="text-muted">
                          {t('orders@intercom')}:{' '}
                          <span>{recipient.intercom}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
