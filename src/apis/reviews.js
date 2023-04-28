import * as http from '~services/http';

export function getReviews() {
  return http.get('reviews');
}
