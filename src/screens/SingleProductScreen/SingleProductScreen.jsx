import React, { useState } from 'react';
import styles from './SingleProductScreen.module.scss';
import { AiOutlineHeart } from 'react-icons/ai';
// import TopBarLinks from 'src/layout/TopBar/TopBarLinks';
import Breadcrumb from '~components/Breadcrumb';
import MainLayout from '~layouts/MainLayout';
import ProductAccordion from './ProductAccordion';
import ProductSlider from './ProductSlider';
import OtherProducts from './OtherProducts';
import useTranslation from '~hooks/useTranslation';
import AddToCart from '~components/AddToCart';
import ProductCardCount from '~components/ProductCard/ProductCardCount';
import { formatPrice } from '~utils/formatter';

function SingleProductScreen({ product, otherProducts }) {
  const { t, locale } = useTranslation();

  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 1) {
      return;
    }

    setCount(count - 1);
  };

  return (
    <MainLayout>
      <section>
        <div className="container h-100 pt-5">
          <Breadcrumb
          // flowersFiltredItem={flowersFiltredItem}
          // link="Flowers"
          // href="/categories/flowers/products"
          />

          <div className="row d-flex pt-3 justify-content-between align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className={`${styles['border-styles']} card text-black`}>
                <div className="card-body ">
                  <div className="row justify-content-between">
                    <div className="col-md-12 col-lg-6 col-xl-7 order-1 order-lg-1">
                      <div className={styles['left-box-background-image']}>
                        <ProductSlider images={product.images} />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-5 col-xl-4 offset-xl-1 d-flex flex-column align-items-center order-2 order-lg-2">
                      <div
                        className={`${styles['title-view-product']} text-start w-100`}
                      >
                        <h2>{product.translations[locale].title}</h2>
                      </div>

                      <p
                        className={`text-start w-100 mt-4 text-muted ${styles['responsive-product-view-code']}`}
                      >
                        {t('single-product-page@code')}:{' '}
                        <strong className={styles['product-code-design']}>
                          N: {product.code}
                        </strong>
                      </p>
                      <p
                        className={`text-start fs-3 w-100 mt-2 fw-bold ${styles['responsive-view-price']}`}
                      >
                        {formatPrice(product.price * count)}
                      </p>
                      <div className="text-start w-100">
                        <div className={styles['responsive-view-calc']}>
                          <ProductCardCount
                            count={count}
                            increment={increment}
                            decrement={decrement}
                          />
                        </div>

                        <div className={styles['icons-styles']}>
                          <div className={`${styles['style-button-cart']}`}>
                            <AddToCart
                              productId={product.id}
                              quantity={count}
                            />
                          </div>

                          <div className="icon">
                            <AiOutlineHeart className={styles['icon-heart']} />
                          </div>
                          <div className={styles['border-icons']} />
                          {/* <div>
                            <div className={styles['social-link']}>
                              <div className="social-links  d-flex align-items-center justify-content-md-start justify-content-center">
                                <TopBarLinks />
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>

                      <ProductAccordion product={product} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OtherProducts otherProducts={otherProducts} />
    </MainLayout>
  );
}

export default SingleProductScreen;
