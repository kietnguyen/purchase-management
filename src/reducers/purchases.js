import { types } from '../actions/purchases';

const addProductUse = (state, { id }) => {
  const purchaseIndex = state.findIndex((purchase) => purchase.id === id);
  return [
    ...state.slice(0, purchaseIndex),
    { ...state[purchaseIndex], currentUses: state[purchaseIndex].currentUses + 1 },
    ...state.slice(purchaseIndex + 1),
  ];
};

const removePurchase = (state, { id }) => {
  const purchaseIndex = state.findIndex((p) => p.id === id);
  return [...state.slice(0, purchaseIndex), ...state.slice(purchaseIndex + 1)];
};

const updatePurchase = (state, { purchase }) => {
  const purchaseIndex = state.findIndex((p) => p.id === purchase.id);
  return [...state.slice(0, purchaseIndex), { ...purchase }, ...state.slice(purchaseIndex + 1)];
};

const purchasesReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_PURCHASE:
      return state.concat(action.payload.purchase);
    case types.ADD_PRODUCT_USE:
      return addProductUse(state, action.payload);
    case types.GET_PURCHASES:
      return action.payload.purchases;
    case types.REMOVE_PURCHASE:
      return removePurchase(state, action.payload);
    case types.UPDATE_PURCHASE:
      return updatePurchase(state, action.payload);
    default:
      return state;
  }
};

export default purchasesReducer;
