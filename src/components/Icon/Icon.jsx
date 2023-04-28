import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './constants';

export function Icon({ icon, ...rest }) {
  return <FontAwesomeIcon icon={icon} {...rest} />;
}

Icon.icons = icons;
export default Icon;
