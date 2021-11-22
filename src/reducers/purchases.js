import { types } from '../actions/purchases';

const addProductUse = (state, { id }) => {
  const purchases = [...state];
  const purchase = purchases.find((purchase) => purchase.id === id);
  purchase.currentUses++;

  return purchases;
};

const updatePurchase = (state, { purchase }) => {
  const purchases = [...state];
  const purchaseIndex = purchases.findIndex((p) => p.id === purchase.id);
  purchases[purchaseIndex] = purchase;

  return purchases;
};

const purchasesReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_PURCHASE:
      return state.concat(action.payload.purchase);
    case types.ADD_PRODUCT_USE:
      return addProductUse(state, action.payload);
    case types.GET_PURCHASES:
      return action.payload.purchases;
    case types.UPDATE_PURCHASE:
      return updatePurchase(state, action.payload);
    default:
      return state;
  }
};

export default purchasesReducer;
