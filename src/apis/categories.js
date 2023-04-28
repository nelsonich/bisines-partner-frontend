import * as http from '~services/http';

export function getCategories() {
  return http.get('/categories');
}

export function getCategoryFields(categoryKey) {
  return http.get(`/categories/${categoryKey}/product-fields`);
}
