export const types = {
  EDIT_PURCHASE: 'EDIT_PURCHASE',
  RESET_PURCHASE: 'RESET_PURCHASE',
};

export const editPurchase = (purchase) => {
  return { type: types.EDIT_PURCHASE, payload: { purchase } };
};

export const resetPurchase = () => {
  return { type: types.RESET_PURCHASE };
};
