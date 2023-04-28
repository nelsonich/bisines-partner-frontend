export const formatPrice = (value, currency = 'AMD') => {
  return `${undefined === value ? 0 : value} ${currency}`;
};
