import React, { useCallback, useEffect, useState } from 'react';
import styles from './HeaderCart.module.scss';
import { BsCart4 } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import useTranslation from '~hooks/useTranslation';
import AnchorLink from '~components/AnchorLink';
import Button from '~components/Button';
import useShoppingCartStore from '~stores/useShoppingCartStore';
import { getProductList, removeCartItem } from '~apis/shopping-cart';
import { formatPrice } from '~utils/formatter';
import useAuth from '~hooks/useAuth';
import SlideDrawer from '~components/SlideDrawer';

function HeaderCart() {
  const { t, locale } = useTranslation();
  const { isLogged } = useAuth();
  const { list, removeProduct } = useShoppingCartStore();

  const [opened, setOpened] = useState(false);
  const onClose = useCallback(() => {
    setOpened(false);
  }, []);

  const onOpen = useCallback(() => {
    setOpened(true);
  }, []);

  const [total, setTotal] = useState(0);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    if (isLogged && opened) {
      loadCartData();
    }
  }, [opened]);

  const loadCartData = useCallback(async () => {
    const request = await getProductList();
    const response = await request.json();

    if (response.status === 'success') {
      setProductList(response.products);
      setTotal(response.total);
    }
  }, []);

  const handleRemoveCartItem = async (id, productId) => {
    const request = await removeCartItem({ id });
    const response = await request.json();

    if (response.status === 'success') {
      removeProduct(productId);
      loadCartData();
    }
  };

  return (
    <>
      <div className={`${styles['toggler-icon-show']}`} onClick={onOpen}>
        <BsCart4 />
        {list?.length !== 0 && <span>{list?.length}</span>}
      </div>

      {opened && (
        <SlideDrawer
          onClose={onClose}
          width="400px"
          title={t('shopping-cart@title')}
        >
          {isLogged ? (
            <>
              {productList?.length > 0 ? (
                <div>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {productList.map((product, index) => {
                      return (
                        <div
                          key={`header-cart-${index}`}
                          className={`${styles['cart-product-items']}`}
                        >
                          <div>
                            <AnchorLink
                              href={`/categories/${product.category.key}/products/${product.id}/${product.translations[locale].slug}`}
                            >
                              <img
                                src={product.image_key}
                                alt={product.translations[locale].title}
                              />
                            </AnchorLink>
                          </div>
                          <div className={styles['name-widths']}>
                            <p>{product.translations[locale].title}</p>
                            <p>{`${formatPrice(product.price)} x ${
                              product.quantity
                            }`}</p>
                          </div>
                          <div
                            className={styles['delete-cart-items']}
                            onClick={() =>
                              handleRemoveCartItem(
                                product.cart_item_id,
                                product.id
                              )
                            }
                          >
                            <AiOutlineClose />
                          </div>
                        </div>
                      );
                    })}
                  </ul>

                  <div
                    className={`${styles['sub-total']} d-flex align-items-center justify-content-between py-3 mt-5`}
                  >
                    <span>{t('shopping-cart@sub-total')}</span>
                    <span>{formatPrice(total)}</span>
                  </div>

                  <div className={`${styles['cart-actions']} `}>
                    <AnchorLink href="/shopping/cart">
                      <Button width="137px" height="40px" fontSizes="10px">
                        {t('shopping-cart-action@view-cart')}
                      </Button>
                    </AnchorLink>

                    <AnchorLink href="/shopping/checkout">
                      <Button width="137px" height="40px" fontSizes="10px">
                        {t('shopping-cart-action@checkout')}
                      </Button>
                    </AnchorLink>
                  </div>
                </div>
              ) : (
                <h4 className="text-center">{t('shopping-cart@empty')}</h4>
              )}
            </>
          ) : (
            <div className={styles['unauthenticated-content']}>
              <div className="d-flex align-items-center flex-column">
                <p>{t('shopping-cart@unauthenticated-content')}</p>
                <AnchorLink href="/auth/sign-in">
                  <Button>{t('button@login')}</Button>
                </AnchorLink>
              </div>
            </div>
          )}
        </SlideDrawer>
      )}
    </>
  );
}

export default HeaderCart;
