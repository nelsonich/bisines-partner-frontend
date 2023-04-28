import * as http from '~services/http';

export function getProducts() {
  return http.get('/products');
}

export function getProductsByCategory({ categoryKey }) {
  return http.get(`/categories/${categoryKey}/products`);
}

export function getOtherProductsByCategory({ categoryKey, productId }) {
  return http.get(`/categories/${categoryKey}/products/${productId}/other`);
}

export function getProduct({ categoryKey, id }) {
  return http.get(`/categories/${categoryKey}/products/${id}`);
}

export function getFilteredProducts({ filters }) {
  return http.get(`/products?filter=${JSON.stringify(filters)}`);
}
