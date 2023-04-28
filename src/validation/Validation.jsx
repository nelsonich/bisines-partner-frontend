export function validateName(name, valid) {
  if (name.length < 3) {
    valid({
      valid: 'is-invalid',
      text: 'The first name will be a minumum of 3 letters.',
      isValid: false,
      value: name,
    });
  } else {
    valid({
      valid: 'is-valid',
      text: '',
      isValid: true,
      value: name,
    });
  }
}
export function validateLastname(lastname, valid) {
  if (lastname.length < 3) {
    valid({
      valid: 'is-invalid',
      text: 'The last name will be a minumum of 3 letters.',
      isValid: false,
      value: lastname,
    });
  } else {
    valid({
      valid: 'is-valid',
      text: '',
      isValid: true,
      value: lastname,
    });
  }
}

export function validatePassword(password, valid) {
  if (password.length < 6 || password.length > 30) {
    valid({
      valid: 'is-invalid',
      text: 'The Password will be a minumum of 6 letters.',
      isValid: false,
      value: password,
    });
  } else {
    valid({
      valid: 'is-valid',
      text: '',
      isValid: true,
      value: password,
    });
  }
}

export function validateMessage(message, valid) {
  if (message.length < 20) {
    valid({
      valid: 'is-invalid',
      text: 'The first name will be a minumum of 20 letters.',
      isValid: false,
      value: message,
    });
  } else {
    valid({
      valid: 'is-valid',
      text: '',
      isValid: true,
      value: message,
    });
  }
}

export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email !== '') {
    return re.test(String(email).toLowerCase());
  }
}

export function validateAddress(address, valid) {
  if (address.length < 6) {
    valid({
      valid: 'is-invalid',
      text: 'The Address will be a minumum of 6 letters.',
      isValid: false,
    });
  } else {
    valid({
      valid: 'is-valid',
      text: '',
      isValid: true,
    });
  }
}

export function validateAdditional(additional, valid) {
  if (additional.length < 10) {
    valid({
      valid: 'is-invalid',
      text: 'The Additional information will be a minumum of 10 letters.',
      isValid: false,
    });
  } else {
    valid({
      valid: 'is-valid',
      text: '',
      isValid: true,
    });
  }
}

export function ValidatePasswordone(password, passwordrep) {
  if (password === passwordrep && password.length >= 6) {
    return 'is-valid';
  } else {
    return false;
  }
}
