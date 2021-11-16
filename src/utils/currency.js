import currency from 'currency.js';

export const priceFormatter = (value) => currency(value, {
  symbol: '$',
  separator: ',',
  decimal: '.',
  precision: 0,
}).format();

