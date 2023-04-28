import React, { useCallback } from 'react';
import styles from './TableCart.module.scss';
import AnchorLink from '~components/AnchorLink';
import { AiOutlineClose } from 'react-icons/ai';
import ProductCardCount from '~components/ProductCard/ProductCardCount';
import useTranslation from '~hooks/useTranslation';
import { formatPrice } from '~utils/formatter';
import { removeCartItem, increment, decrement } from '~apis/shopping-cart';
import useShoppingCartStore from '~stores/useShoppingCartStore';

function TableCart({ productList, loadCartData }) {
  const { t, locale } = useTranslation();
  const { removeProduct } = useShoppingCartStore();

  const handleRemoveCartItem = async (id, productId) => {
    const request = await removeCartItem({ id });
    const response = await request.json();

    if (response.status === 'success') {
      removeProduct(productId);
      loadCartData();
    }
  };

  const onIncrement = useCallback(async (id) => {
    const request = await increment({ id });
    const response = await request.json();

    if (response.status === 'success') {
      loadCartData();
    }
  }, []);

  const onDecrement = useCallback(async (id, quantity) => {
    if (quantity === 1) {
      return;
    }

    const request = await decrement({ id });
    const response = await request.json();

    if (response.status === 'success') {
      loadCartData();
    }
  }, []);

  return (
    <table className={`${styles['table-box']} table table-border mt-4`}>
      <thead className={styles['thead-tr']}>
        <tr className={styles['tr-font']}>
          <th scope="col">{t('shopping-cart-table@product-code')}</th>
          <th className={styles['product-image-th']} scope="col">
            {t('shopping-cart-table@product-image')}
          </th>
          <th scope="col">
            <strong>
              <span className={styles['product-name-responsive']}>
                {t('shopping-cart-table@product-name')}
              </span>
            </strong>
          </th>
          <th className={styles['product-name-responsive']} scope="col">
            <strong>{t('shopping-cart-table@product-price')}</strong>
          </th>

          <th scope="col">
            <strong>{t('shopping-cart-table@quantity')}</strong>
          </th>
          <th scope="col">
            <strong>{t('shopping-cart-table@sub-total')}</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {productList.map((product, index) => {
          return (
            <tr key={`table-Cart-${index}`} className={styles['tr-font']}>
              <td className={styles['tr-font-response']}>
                <AnchorLink
                  href={`/categories/${product.category.key}/products/${product.id}/${product.translations[locale].slug}`}
                >
                  <img
                    src={product.image_key}
                    alt={product.translations[locale]}
                  />
                </AnchorLink>

                <span
                  onClick={() => handleRemoveCartItem(product.cart_item_id)}
                >
                  <AiOutlineClose
                    className={`${styles['icon-x-responsive-mobile']} ms-5 fs-6 text-danger fw-5`}
                  />
                </span>

                <div className={styles['text-align-center']}>
                  <p># {product.code}</p>
                </div>
              </td>

              <th scope="row" className={styles['product-image-th']}>
                <AnchorLink
                  href={`/categories/${product.category.key}/products/${product.id}/${product.translations[locale].slug}`}
                >
                  <img
                    src={product.image_key}
                    alt={product.translations[locale].title}
                  />
                </AnchorLink>

                <span
                  onClick={() =>
                    handleRemoveCartItem(product.cart_item_id, product.id)
                  }
                >
                  <AiOutlineClose
                    className={`${styles['icon-x-responsive']} ms-5 fs-6 text-danger fw-5`}
                  />
                </span>
              </th>

              <td>
                <div className={styles['text-align-center']}>
                  {product.translations[locale].title}{' '}
                  <span className={styles['product-price-responsive']}>
                    {formatPrice(product.price)}
                  </span>
                </div>
              </td>

              <td className={styles['price-none']}>
                <div className={styles['text-align-center']}>
                  {formatPrice(product.price)}
                </div>
              </td>

              <td>
                <div className="d-flex justify-content-center align-items-center">
                  <ProductCardCount
                    count={product.quantity}
                    increment={() => onIncrement(product.cart_item_id)}
                    decrement={() =>
                      onDecrement(product.cart_item_id, product.quantity)
                    }
                  />
                </div>
              </td>

              <td className={styles['price-none']}>
                <div className={styles['text-align-center']}>
                  {formatPrice(product.price * product.quantity)}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default TableCart;
