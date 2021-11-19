export const types = {
  ADD_PURCHASE: 'ADD_PURCHASE',
  GET_PURCHASES: 'GET_PURCHASES',
  ADD_PRODUCT_USE: 'ADD_PRODUCT_USE',
};

export const addPurchase = (purchase) => {
  return { type: types.ADD_PURCHASE, payload: { ...purchase } };
};

export const getPurchases = () => {
  return { type: types.GET_PURCHASES };
};

export const addProductUse = (id) => {
  return { type: types.ADD_PRODUCT_USE, payload: { id } };
};
