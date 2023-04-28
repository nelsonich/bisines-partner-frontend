/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import Link from 'next/link';

function AnchorLink({ href, children, target = undefined, ...rest }) {
  return (
    <Link
      {...rest}
      target={target}
      rel={target === '_blank' ? 'noopener' : undefined}
      href={href}
    >
      {children}
    </Link>
  );
}

export default AnchorLink;
