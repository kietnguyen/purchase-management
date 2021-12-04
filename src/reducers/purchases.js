import sumBy from 'lodash/sumBy';
import { types } from '../actions/purchases';
import { priceFormatter } from '../utils/currency';

const getStatistics = (purchases) => {
  return {
    totalSpent: priceFormatter(sumBy(purchases, 'price')),
    totalItems: purchases.length,
  };
};

const addPurchase = (state, { purchase }) => {
  const { purchases } = state;
  const newPurchases = [...purchases, purchase];

  return { statistics: getStatistics(newPurchases), purchases: newPurchases };
};

const addProductUse = (state, { id }) => {
  const { purchases } = state;
  const index = purchases.findIndex((purchase) => purchase.id === id);
  const purchase = purchases[index];
  const newPurchases = [
    ...purchases.slice(0, index),
    { ...purchase, currentUses: purchase.currentUses + 1 },
    ...purchases.slice(index + 1),
  ];

  return { ...state, purchases: newPurchases };
};

const getPurchases = (state, { purchases }) => {
  return { statistics: getStatistics(purchases), purchases };
};

const removePurchase = (state, { id }) => {
  const { purchases } = state;
  const index = purchases.findIndex((p) => p.id === id);
  const newPurchases = [...purchases.slice(0, index), ...purchases.slice(index + 1)];

  return { statistics: getStatistics(newPurchases), purchases: newPurchases };
};

const updatePurchase = (state, { purchase }) => {
  const { purchases } = state;
  const index = purchases.findIndex((p) => p.id === purchase.id);
  const newPurchases = [...purchases.slice(0, index), purchase, ...purchases.slice(index + 1)];

  return { statistics: getStatistics(newPurchases), purchases: newPurchases };
};

const initialState = { purchases: [], statistics: { totalItems: 0, totalSpent: 0 } };

const purchasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PURCHASE:
      return addPurchase(state, action.payload);
    case types.ADD_PRODUCT_USE:
      return addProductUse(state, action.payload);
    case types.GET_PURCHASES:
      return getPurchases(state, action.payload);
    case types.REMOVE_PURCHASE:
      return removePurchase(state, action.payload);
    case types.UPDATE_PURCHASE:
      return updatePurchase(state, action.payload);
    default:
      return state;
  }
};

export default purchasesReducer;
