import * as http from '~services/http';

export function edit({ firstName, lastName, gender }) {
  return http.put('users/profile', {
    first_name: firstName,
    last_name: lastName,
    gender,
  });
}
