import React from 'react';
import styles from './ContactIcon.module.scss';
import Icon from '~components/Icon';

function ContactIcon({ mode = 'light', size = 'normal', icon, link, text }) {
  return (
    <div
      className={`${styles['contact-icon']} ${styles[`mode-${mode}`]} ${
        styles[`size-${size}`]
      }`}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <span className={styles['icon']}>
          <Icon icon={icon} />
        </span>
        {text && <span className={styles['text']}>{text}</span>}
      </a>
    </div>
  );
}

export default ContactIcon;
