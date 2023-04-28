import styles from './NavLink.module.scss';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import AnchorLink from '~components/AnchorLink';

function NavLink({ link, children, className, activeClassName, ...rest }) {
  const { asPath } = useRouter();
  const isActive = useMemo(() => {
    return asPath.split('?').shift() === link;
  }, [asPath, link]);

  const itemClassList = [styles['nav-link'], className || ''];
  if (isActive) {
    itemClassList.push(activeClassName);
  }

  return (
    <AnchorLink {...rest} href={link} className={itemClassList.join(' ')}>
      {children}
    </AnchorLink>
  );
}

export default NavLink;
