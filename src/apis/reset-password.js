import * as http from '~services/http';

export function create({ email }) {
  return http.post('users/password/recovery', { email });
}

export function find({ token }) {
  return http.get(`users/password/recovery?reset_token=${token}`);
}

export function reset({ token, password }) {
  return http.put('users/password/recovery', { reset_token: token, password });
}
