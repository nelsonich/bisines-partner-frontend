import React from 'react';
import styles from './Breadcrumb.module.scss';
import AnchorLink from '~components/AnchorLink';

function Breadcrumb({ links = [] }) {
  return (
    <div className={styles['breadcrumb-big-box']}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb m-0 p-2">
          <li className="breadcrumb-item">
            <AnchorLink href="/" className="text-secondary">
              Home
            </AnchorLink>

            {links.map((link, index) => (
              <AnchorLink
                key={`Breadcrumb-${index}-${link.link}`}
                className="text-secondary"
                href={link.link}
              >
                {' / ' + link.text}
              </AnchorLink>
            ))}
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
