import React from 'react';
import styles from './SocialLinks.module.scss';
import ContactIcon from '~components/ContactIcon';
import * as contactInfo from '~constants/contacts';

function SocialLinks() {
  return (
    <div className={styles['social-link']}>
      <div className="d-flex align-items-center justify-content-md-start justify-content-center">
        {contactInfo.socials.map((social, index) => (
          <ContactIcon
            key={`SocialLinks-${index}-social`}
            mode="primary"
            size="compact"
            link={social.link}
            icon={social.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
