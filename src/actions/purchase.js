export const types = {
  EDIT_PURCHASE: 'EDIT_PURCHASE',
};

export const editPurchase = (purchase) => {
  return { type: types.EDIT_PURCHASE, payload: { purchase } };
};
