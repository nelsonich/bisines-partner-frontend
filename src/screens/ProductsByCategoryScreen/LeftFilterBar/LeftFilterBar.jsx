import React from 'react';
import styles from './LeftFilterBar.module.scss';
import { FaFilter } from 'react-icons/fa';
import useScreenSize, { screenMobileMax } from '~hooks/useScreenSize';
import FilterData from './FilterData';

function LeftFilterBar({ handleFilterChange }) {
  const { width } = useScreenSize();
  if (width === 0) {
    return null;
  }

  return (
    <div className="col-md-2">
      {screenMobileMax > width ? (
        <div className={`d-flex justify-content-end mt-3`}>
          <button
            className={`${styles['togler-icon-show']} btn btn-light navbar-toggler ms-2`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight3"
            aria-controls="offcanvasRight3"
          >
            <span className={styles['font-filter-bar']}>Filter</span>{' '}
            <FaFilter className={styles['icon-responsive']} />
          </button>

          <div
            className={`offcanvas offcanvas-end navbar-toggler ${styles['cart-body-box']}`}
            tabIndex="-1"
            id="offcanvasRight3"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="container">
              <div className={styles['cart-title']}>
                <h5>Filter</h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
            </div>
            <div className="offcanvas-header">
              <div className="offcanvas-body">
                <FilterData handleFilterChange={handleFilterChange} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles['filter-data-responsive']}>
          <FilterData handleFilterChange={handleFilterChange} />
        </div>
      )}
    </div>
  );
}

export default LeftFilterBar;
