export const types = {
  ADD_PRODUCT_USE: 'ADD_PRODUCT_USE',
  ADD_PURCHASE: 'ADD_PURCHASE',
  FETCH_PURCHASES: 'FETCH_PURCHASES',
  GET_PURCHASES: 'GET_PURCHASES',
  REMOVE_PURCHASE: 'REMOVE_PURCHASE',
  UPDATE_PURCHASE: 'UPDATE_PURCHASE',
};

export const addPurchase = (purchase) => {
  return { type: types.ADD_PURCHASE, payload: { purchase } };
};

export const addProductUse = (id) => {
  return { type: types.ADD_PRODUCT_USE, payload: { id } };
};

export const fetchPurchases = () => {
  return { type: types.FETCH_PURCHASES };
};

export const getPurchases = (purchases) => {
  return { type: types.GET_PURCHASES, payload: { purchases } };
};

export const removePurchase = (id) => {
  return { type: types.REMOVE_PURCHASE, payload: { id } };
};

export const updatePurchase = (purchase) => {
  return { type: types.UPDATE_PURCHASE, payload: { purchase } };
};
