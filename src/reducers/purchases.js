import { types } from '../actions/purchases';

const purchasesReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_PURCHASES:
      return action.payload.purchases;
    case types.ADD_PURCHASE:
      return state.concat(action.payload.purchase);
    case types.ADD_PRODUCT_USE:
      const { id } = action.payload;

      const newPurchases = [...state];
      const purchase = newPurchases.find((purchase) => purchase.id === id);
      purchase.currentUses++;

      return newPurchases;
    default:
      return state;
  }
};

export default purchasesReducer;
