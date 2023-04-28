import 'isomorphic-fetch';

const defaultHeaders = {};

export function setLocale(locale) {
  return setDefaultHeader('X-App-Language', locale);
}

export function setDefaultHeader(name, value) {
  defaultHeaders[name] = value;
}

export function removeDefaultHeader(name) {
  delete defaultHeaders[name];
}

export function get(url, /*data = {}, */ headers = {}) {
  return send({
    method: 'GET',
    url,
    headers,
    // body: JSON.stringify(data),
  });
}

export function post(url, data = {}, headers = {}) {
  return send({
    method: 'POST',
    url,
    headers,
    body: JSON.stringify(data),
  });
}

export function put(url, data = {}, headers = {}) {
  return send({
    method: 'PUT',
    url,
    headers,
    body: JSON.stringify(data),
  });
}

export function del(url, data = {}, headers = {}) {
  return send({
    method: 'DELETE',
    url,
    headers,
    body: JSON.stringify(data),
  });
}

export function patch(url, data = {}, headers = {}) {
  return send({
    method: 'PATCH',
    url,
    headers,
    body: JSON.stringify(data),
  });
}

export function send(requestInfo) {
  const { url } = requestInfo;
  delete requestInfo.url;

  requestInfo.redirect = 'follow';
  requestInfo.headers = {
    'X-Request-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...defaultHeaders,
    ...requestInfo.headers,
  };

  const reqUrl = url[0] === '/' ? url.substr(1) : url;
  return fetch(`${process.env.NEXT_PUBLIC_API}/${reqUrl}`, requestInfo);
}
