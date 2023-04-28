import React from 'react';
import styles from './ContactInfos.module.scss';
import ContactIcon from '~components/ContactIcon/ContactIcon';
import * as contactInfo from '~constants/contacts';

function ContactInfos() {
  return (
    <div className={styles['icon-box']}>
      {contactInfo.contacts.map((contactInfo, index) => (
        <ContactIcon
          key={`ContactInfos-${index}-contact`}
          mode="primary"
          size="compact"
          {...contactInfo}
        />
      ))}
    </div>
  );
}

export default ContactInfos;
