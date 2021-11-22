import { types } from '../actions/purchase';

const purchaseReducer = (state = {}, action) => {
  switch (action.type) {
    case types.EDIT_PURCHASE:
      return action.payload.purchase;
    case types.RESET_PURCHASE:
      return {};
    default:
      return state;
  }
};

export default purchaseReducer;
