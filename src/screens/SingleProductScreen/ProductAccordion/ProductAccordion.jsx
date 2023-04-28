import React from 'react';
import useTranslation from '~hooks/useTranslation';

function ProductAccordion({ product }) {
  const { t, locale } = useTranslation();

  return (
    <div className={`accordion pt-5 w-100`}>
      <div className="accordion-item p-2">
        <h2 className="accordion-header fw-bold text-start ms-1 fs-5">
          {t('single-product-page@description')}
        </h2>

        <div className="ms-1 py-3">
          {product.translations[locale].description}
        </div>
      </div>
    </div>
  );
}

export default ProductAccordion;
