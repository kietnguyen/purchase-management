export const types = {
  ADD_PURCHASE: 'ADD_PURCHASE',
  GET_PURCHASES: 'GET_PURCHASES',
};

export const addPurchase = (purchase) => {
  return { type: types.ADD_PURCHASE, payload: { ...purchase } };
};

export const getPurchases = () => {
  return { type: types.GET_PURCHASES };
};
