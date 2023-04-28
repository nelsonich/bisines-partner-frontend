import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
// import styles from './AddToCart.module.scss';
import { BsCart2 } from 'react-icons/bs';
import Button from '~components/Button';
import useAuth from '~hooks/useAuth';
import useTranslation from '~hooks/useTranslation';
import useShoppingCartStore from '~stores/useShoppingCartStore';
import { addToCart } from '~apis/shopping-cart';

function AddToCart({ productId, quantity, showIcon = false }) {
  const router = useRouter();

  const { t } = useTranslation();

  const { isLogged } = useAuth();
  const { setProduct } = useShoppingCartStore();

  const handleAddToCart = useCallback(async () => {
    if (!isLogged) {
      router.push({
        pathname: '/auth/sign-in',
      });
    }

    const request = await addToCart({ productId, quantity });
    const response = await request.json();

    if (response.status) {
      setProduct(productId);
    }
  }, [productId, quantity]);

  return (
    <>
      {!showIcon ? (
        <Button
          width="150px"
          height="40px"
          fontSizes="12px"
          onClick={handleAddToCart}
        >
          {t('single-product-page@add-to-card')}
        </Button>
      ) : (
        <div onClick={handleAddToCart}>
          <BsCart2 />
        </div>
      )}
    </>
  );
}

export default AddToCart;
