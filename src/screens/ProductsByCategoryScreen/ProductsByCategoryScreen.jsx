import React, { useCallback, useEffect, useState } from 'react';
import styles from './ProductsByCategoryScreen.module.scss';
import { useRouter } from 'next/router';
import MainLayout from '~layouts/MainLayout';
import ProductCard from '~components/ProductCard';
import LeftFilterBar from './LeftFilterBar';
import Breadcrumb from '~components/Breadcrumb';
import { getFilteredProducts } from '~apis/products';

function ProductsByCategoryScreen() {
  const router = useRouter();

  const [filterConditions, setFilterConditions] = useState({
    categoryKey: router.query.key,
  });

  useEffect(() => {
    setFilterConditions((old) => ({
      ...old,
      categoryKey: router.query.key,
    }));
  }, [router.query.key]);

  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const getProductList = useCallback(async (filters) => {
    const request = await getFilteredProducts({ filters });
    const response = await request.json();

    if (response.status === 'success') {
      setLoading(false);
      setProducts(response.products);
    }
  }, []);

  const handleFilterChange = useCallback(
    async (event, productField = null) => {
      setFilterConditions((oldFilteringState) => {
        const obj = { ...oldFilteringState };

        if (productField !== null) {
          const { value } = event.target;
          if (productField.type === 'group') {
            if (obj[productField.key] === undefined) {
              obj[productField.key] = [value];
            } else {
              let arr = obj[productField.key];
              if (!arr.includes(value)) {
                arr.push(value);
              } else {
                var index = arr.indexOf(value);
                if (index !== -1) {
                  arr.splice(index, 1);
                }
              }

              obj[productField.key] = [...arr];
            }
          }

          if (productField.type === 'single') {
            obj[productField.key] = value;
          }
        }

        if (productField === null) {
          if (
            typeof event.minPrice !== 'undefined' &&
            typeof event.maxPrice !== 'undefined'
          ) {
            obj.minPrice = event.minPrice;
            obj.maxPrice = event.maxPrice;
          }
        }

        const updatedKeys = { ...obj };
        delete updatedKeys.categoryKey;

        router.replace(
          {
            pathname: router.pathname,
            query: {
              key: router.query.key,
              filter: JSON.stringify(updatedKeys),
            },
          },
          undefined,
          { scroll: false }
        );
        return obj;
      });
    },
    [router.query.key]
  );

  useEffect(() => {
    if (filterConditions.categoryKey !== undefined) {
      getProductList(filterConditions);
    }
  }, [filterConditions]);

  return (
    <MainLayout>
      <div className="container mt-4 mb-5">
        <Breadcrumb
        // links={[
        //   {
        //     link: ``,
        //     text: '',
        //   },
        // ]}
        />

        <div className="row justify-content-between g-2">
          <LeftFilterBar handleFilterChange={handleFilterChange} />

          <div className="col-md-9">
            <div className="row g-2">
              {loading
                ? 'Loading...'
                : products.map((product, index) => (
                    <div
                      key={`product-page-${product.id}-${index}`}
                      className={`${styles['responsive-cards']} col-md-3`}
                    >
                      <ProductCard width="12rem" product={product} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
export default ProductsByCategoryScreen;
