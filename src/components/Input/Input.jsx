import React from 'react';

function Input({
  value = undefined,
  type = 'text',
  placeholder = null,
  id = null,
  valid = {},
  label = null,
  ...rest
}) {
  return (
    <>
      {label !== null && (
        <label {...rest} className="form-label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        {...rest}
        type={type}
        id={id}
        placeholder={placeholder}
        className={`form-control ${valid.valid ? valid.valid : ''}`}
        value={value}
      />

      <div className="invalid-feedback">{valid.text}</div>
    </>
  );
}

export default Input;
