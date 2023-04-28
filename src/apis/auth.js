import * as http from '~services/http';

export function signIn({ email, password }) {
  return http.post('users/login', { email, password });
}

export function signUp({
  firstName,
  lastName,
  email,
  phone,
  password,
  gender,
}) {
  return http.post('users', {
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone,
    password: password,
    gender: gender,
  });
}

export function me() {
  return http.get('users/me');
}

export function logout() {
  return http.post('users/logout');
}
