import React from 'react';
import styles from './FilterBlock.module.scss';
import useTranslation from '~hooks/useTranslation';

function FilterBlock({
  title,
  type,
  values,
  productField,
  handleFilterChange,
}) {
  const { locale } = useTranslation();

  return (
    <>
      <div className="heading d-flex justify-content-between align-items-center">
        <h6 className="text-uppercase">{title}</h6>
      </div>

      {values.map((value, index) => (
        <div
          key={`FilterBlock-${title}-${index}-${value}`}
          className="d-flex justify-content-between mt-2"
        >
          <div className="form-check">
            <label
              className={`form-check-label ${styles['product-category-names']}`}
            >
              {value.translations[locale]}

              <input
                className={`${styles['input-styles']} form-check-input`}
                type={type === 'single' ? 'radio' : 'checkbox'}
                value={`${value.id}`}
                name="product-fields"
                onChange={(e) => handleFilterChange(e, productField)}
              />
            </label>
          </div>
        </div>
      ))}
    </>
  );
}

export default FilterBlock;
