export function parseQueryString(query) {
  const vars = query.split('&');
  const queryString = {};

  for (let i = 0; i < vars.length; ++i) {
    const pair = vars[i].split('=');
    const key = decodeURIComponent(pair[0]);
    const value = decodeURIComponent(pair[1]);

    if (typeof queryString[key] === 'undefined') {
      queryString[key] = decodeURIComponent(value);
    } else if (typeof queryString[key] === 'string') {
      const arr = [queryString[key], decodeURIComponent(value)];
      queryString[key] = arr;
    } else {
      queryString[key].push(decodeURIComponent(value));
    }
  }

  return queryString;
}

export function getUrlParam(key) {
  const queryString = window.location.search.substring(1);
  const data = this.parseQueryString(queryString);

  return data[key] || null;
}

export function replaceUrl(newUrl) {
  if (
    typeof window !== 'undefined' &&
    window &&
    window.location &&
    window.history &&
    window.history.replaceState
  ) {
    window.history.replaceState({}, '', newUrl);
  }
}

export function removeParam(param) {
  if (
    typeof window !== 'undefined' &&
    window &&
    window.location &&
    window.history &&
    window.history.replaceState
  ) {
    const value = this.getUrlParam(param) || '';
    const newUrl = window.location.href
      .replace(`?${param}=${value}&`, '?')
      .replace(`?${param}=${value}`, '')
      .replace(`&${param}=${value}`, '')
      .replace(`?${param}=&`, '?')
      .replace(`?${param}=`, '')
      .replace(`&${param}=`, '')
      .replace(`?${param}&`, '?')
      .replace(`?${param}`, '')
      .replace(`&${param}`, '');

    this.replaceUrl(newUrl);
  }
}

export function removeHash() {
  if (typeof window !== 'undefined' && window && window.location) {
    window.location.hash = '';
  }
}

export function popup(url, options) {
  const optionsStr = Object.keys(options)
    .reduce((acc, key) => {
      acc.push(`${key}=${options[key]}`);
      return acc;
    }, [])
    .join(',');

  return window.open(url, 'popup', optionsStr);
}

export function openTab(url) {
  // window.open(url, "_blank");
  window.open(url, 'BLANK');

  // const aLink = window.document.createElement("a");
  // aLink.target = "_blank";
  // aLink.href = url;

  // const event = window.document.createEvent("MouseEvents");
  // event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  // aLink.dispatchEvent(event);
}
