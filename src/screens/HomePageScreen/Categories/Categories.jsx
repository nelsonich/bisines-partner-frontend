import React from 'react';
import CategoryCard from '~components/CategoryCard';
import styles from './Categories.module.scss';
import useCategories from '~hooks/useCategories';

function Categories() {
  const { categories } = useCategories();

  return (
    <div className={`${styles['home-cat-main']}`}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {categories.map((category, index) => (
            <div
              key={`HomePage-Categories-${index}`}
              className="col-xl-3 col-lg-6 col-12 col-sm-12"
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
