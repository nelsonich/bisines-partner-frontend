import React from 'react';
import styles from './ContentSection.module.scss';

function ContentSection({ iconClassName, title, children }) {
  return (
    <div className={styles['cabinet-content-section']}>
      <div className={styles['header']}>
        <i className={iconClassName} />
        <h5>{title}</h5>
      </div>

      <div className={styles['body']}>{children}</div>
    </div>
  );
}

export default ContentSection;
