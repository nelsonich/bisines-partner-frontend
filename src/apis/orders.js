import * as http from '~services/http';

export function getOrders() {
  return http.get('orders');
}

export function checkout({
  forMe,
  fullName,
  phone,
  city,
  address,
  house,
  access,
  floor,
  intercom,
  date,
  time,
  comment,
  total,
}) {
  return http.post('orders', {
    forMe,
    fullName,
    phone,
    city,
    address,
    house,
    access,
    floor,
    intercom,
    date,
    time,
    comment,
    total,
  });
}
