import currency from 'currency.js';

export const priceFormatter = (value, options) =>
  currency(value, {
    symbol: '$',
    separator: ',',
    decimal: '.',
    precision: 0,
    ...options,
  }).format();
