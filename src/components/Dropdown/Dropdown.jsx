import React from 'react';
// import styles from './Dropdown.module.scss';
import uuid from '~utils/uuid';

function Dropdown({
  label = null,
  required = false,
  icon = null,
  options = [],
  uniqueId,
  valid = {},
  ...rest
}) {
  return (
    <div>
      {label && (
        <label htmlFor={uniqueId} className="form-label">
          {label} {required && <span>*</span>}
        </label>
      )}

      {icon && <span>{icon}</span>}

      <select {...rest} id={uniqueId} className={`form-control ${valid.valid}`}>
        {options.map((option, index) => (
          <option
            key={`Dropdown-option-${uniqueId}-${option.value}-${index}`}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      uniqueId: 'id-' + uuid(),
    }, // will be passed to the page component as props
  };
}

export default Dropdown;
