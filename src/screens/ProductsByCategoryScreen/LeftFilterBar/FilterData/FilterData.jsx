import React, { useCallback, useEffect, useState } from 'react';
import styles from './FilterData.module.scss';
import { useRouter } from 'next/router';
import { getCategoryFields } from '~apis/categories';
import MultiRangeSlider from '~components/MultiRangeSlider';
import FilterBlock from './FilterBlock';
import useTranslation from '~hooks/useTranslation';

function FilterData({ handleFilterChange }) {
  const { locale } = useTranslation();
  const router = useRouter();

  const [productFields, setProductFields] = useState([]);
  const loadProductFields = useCallback(async (categoryKey) => {
    const request = await getCategoryFields(categoryKey);
    const response = await request.json();

    setProductFields(response.productFields);
  }, []);

  useEffect(() => {
    if (!router?.query?.key) {
      return;
    }

    loadProductFields(router.query.key);
  }, [router?.query?.key]);

  return (
    <>
      <div className={`${styles['processor']} p-2`}>
        <div>
          <div className="heading d-flex justify-content-between align-items-center">
            <h6 className={styles['cat-h6']}>Price</h6>
          </div>
          <div>
            <MultiRangeSlider
              min={0}
              max={50_000}
              onChange={(value) =>
                handleFilterChange({ minPrice: value.min, maxPrice: value.max })
              }
            />
          </div>
        </div>
      </div>

      {productFields.map((productField, index) => (
        <div
          key={`FilterData-${index}-${productField.id}`}
          className={`${styles['processor']} p-2`}
        >
          <FilterBlock
            title={productField.translations[locale]}
            type={productField.type}
            values={productField.values}
            productField={productField}
            handleFilterChange={handleFilterChange}
          />
        </div>
      ))}
    </>
  );
}
export default FilterData;
