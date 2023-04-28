import React from 'react';
import styles from './CategoriesScreen.module.scss';
import MainLayout from '~layouts/MainLayout';
import PageHero from '~components/PageHero';
import useCategories from '~hooks/useCategories';
import CategoryCard from '~components/CategoryCard';

function CategoriesScreen() {
  const { categories } = useCategories();

  return (
    <MainLayout>
      <PageHero
        title="Categories"
        image="https://img.rawpixel.com/private/static/images/website/2022-05/rm428-0054_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ec30c49d2beddd242748e2329f9d0549"
      />

      <div className={styles['page-container']}>
        <div className="container">
          <div className="row">
            {categories.map((category, index) => (
              <div
                key={`CategoriesScreen-${index}-${category.key}`}
                className="col-xl-3 col-lg-6 col-12 col-sm-12"
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CategoriesScreen;
