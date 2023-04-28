import * as http from '~services/http';

export function addToCart({ productId, quantity }) {
  return http.post('shopping-cart', { productId, quantity });
}

export function getProductList() {
  return http.get('shopping-cart');
}

export function removeCartItem({ id }) {
  return http.del(`shopping-cart/${id}`);
}

export function increment({ id }) {
  return http.put(`shopping-cart/${id}/increment`);
}

export function decrement({ id }) {
  return http.put(`shopping-cart/${id}/decrement`);
}
