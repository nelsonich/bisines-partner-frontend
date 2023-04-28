function withStorage(callback) {
  if (typeof window !== 'undefined') {
    return callback(window.localStorage);
  }

  return null;
}

export function setStorage(key, value) {
  return withStorage((storage) => {
    return storage.setItem(key, value);
  });
}

export function getStorage(key) {
  return withStorage((storage) => {
    return storage.getItem(key);
  });
}

export function removeStorage(key) {
  return withStorage((storage) => {
    return storage.removeItem(key);
  });
}
