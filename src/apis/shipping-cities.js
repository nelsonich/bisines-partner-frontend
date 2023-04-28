import * as http from '~services/http';

export function getShippingCities() {
  return http.get('shipping-cities');
}
