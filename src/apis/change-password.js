import * as http from '~services/http';

export function change({ oldPassword, newPassword }) {
  return http.put('users/password', {
    old_password: oldPassword,
    new_password: newPassword,
  });
}
